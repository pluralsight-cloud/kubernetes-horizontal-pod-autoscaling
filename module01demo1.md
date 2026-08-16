# Module 01: **Using HPAs for autoscaling, Demo 01: Demo: environment setup**

This module uses a local Kubernetes cluster in Docker Desktop. Install Docker Desktop and enable Kubernetes before you install the Metrics Server.

## Install Docker Desktop

Download the installer for your operating system from the [Docker Desktop download page](https://docs.docker.com/desktop/setup/install/). Commercial use in organizations with more than 250 employees or more than $10 million USD in annual revenue requires a [paid Docker subscription](https://www.docker.com/pricing/).

### Windows

Docker Desktop on Windows uses the WSL 2 backend by default. You need:

- Windows 10 22H2 or later, or Windows 11 23H2 or later (64-bit)
- At least 8 GB of RAM
- Hardware virtualization enabled in BIOS/UEFI
- [WSL 2](https://learn.microsoft.com/windows/wsl/install) version 2.1.5 or later

Install WSL 2 if it is not already present. In an elevated PowerShell or Command Prompt:

```powershell
wsl --install
```

Restart Windows if the installer asks you to. Then download [Docker Desktop for Windows](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe) and run `Docker Desktop Installer.exe`.

1. Choose **per-user** installation unless you need an all-users install.
2. Keep **Use WSL 2 instead of Hyper-V** selected.
3. Finish the wizard, then start Docker Desktop from the Start menu.
4. Accept the Docker Subscription Service Agreement when prompted.

Confirm Docker is running:

```powershell
docker version
```

### macOS

You need a supported macOS release (the current major version and the two previous majors) and at least 4 GB of RAM.

1. Download [Docker Desktop for Apple silicon](https://desktop.docker.com/mac/main/arm64/Docker.dmg) or [Docker Desktop for Intel](https://desktop.docker.com/mac/main/amd64/Docker.dmg).
2. Open `Docker.dmg` and drag Docker into **Applications**.
3. Open **Docker.app**.
4. Accept the subscription agreement, then choose **Use recommended settings**.
5. Select **Finish**. Enter your password if macOS asks for it.

On Apple silicon, Rosetta 2 is optional but recommended:

```bash
softwareupdate --install-rosetta
```

Confirm Docker is running:

```bash
docker version
```

### Linux

Docker Desktop for Linux is available for Ubuntu, Debian, Fedora, and RHEL. You need a 64-bit kernel with KVM, QEMU 5.2 or later, systemd, and at least 4 GB of RAM.

Follow the package steps for your distribution:

- [Ubuntu](https://docs.docker.com/desktop/setup/install/linux/ubuntu/)
- [Debian](https://docs.docker.com/desktop/setup/install/linux/debian/)
- [Fedora](https://docs.docker.com/desktop/setup/install/linux/fedora/)
- [RHEL](https://docs.docker.com/desktop/setup/install/linux/rhel/)

After the package is installed, start Docker Desktop from your applications menu or with:

```bash
systemctl --user start docker-desktop
```

Confirm Docker is running:

```bash
docker version
```

Docker Desktop for Linux does not install `kubectl`. Install it separately with the [Kubernetes kubectl guide](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/) and place the binary at `/usr/local/bin/kubectl`.

## Enable Kubernetes in Docker Desktop

Docker Desktop can run a local cluster and, on Windows and macOS, it also installs `kubectl`.

On Docker Desktop 4.51 and later:

1. Open the Docker Desktop Dashboard and select the **Kubernetes** view.
2. Select **Create cluster**.
3. Choose **Kubeadm** for a single-node cluster. That is enough for this course.
4. Select **Create**.

The first start downloads cluster images and can take a few minutes. When the cluster is ready, the Dashboard footer shows Kubernetes as running.

On older Docker Desktop versions, open **Settings** > **Kubernetes**, select **Enable Kubernetes**, then **Apply**.

Point `kubectl` at the Docker Desktop cluster and confirm the node is Ready:

```bash
kubectl config use-context docker-desktop
kubectl get nodes
```

You should see a `docker-desktop` node with status `Ready`. If `kubectl` talks to another cluster, run `kubectl config get-contexts` and switch to `docker-desktop`.

Give Docker Desktop enough resources for Kubernetes. If the cluster fails to start, open **Settings** > **Resources** and increase CPU and memory.

## Install the Metrics Server

HPA needs current CPU and memory usage. The [Metrics Server](https://github.com/kubernetes-sigs/metrics-server) scrapes each node's Kubelet and exposes the Metrics API (`metrics.k8s.io`). HPA and `kubectl top` both use that API.

### Install from the official manifest

Apply the latest release:

```bash
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

That creates the Metrics Server Deployment, Service, RBAC objects, and APIService in the `kube-system` namespace.

Docker Desktop uses self-signed Kubelet certificates, so add `--kubelet-insecure-tls` to the Deployment after it is created:

```bash
kubectl patch deployment metrics-server -n kube-system --type json -p '[{"op": "add", "path": "/spec/template/spec/containers/0/args/-", "value": "--kubelet-insecure-tls"}]'
```

Wait for the rollout to finish:

```bash
kubectl rollout status deployment/metrics-server -n kube-system
```

## Verify the install

Confirm the pod is running:

```bash
kubectl get deployment,pods -n kube-system -l k8s-app=metrics-server
```

Confirm the Metrics API is registered:

```bash
kubectl get apiservice v1beta1.metrics.k8s.io
```

The `AVAILABLE` column should be `True`. Then check node and pod usage:

```bash
kubectl top nodes
kubectl top pods -A
```

If `kubectl top` returns metrics, HPA can read CPU and memory from the same API.

## Troubleshooting

If the pod is not ready, inspect the logs:

```bash
kubectl logs -n kube-system -l k8s-app=metrics-server
```

Common issues:

- **Metrics API stays unavailable**: wait about a minute after the pod is Ready, then re-run `kubectl get apiservice v1beta1.metrics.k8s.io`.
- `kubectl top` **says metrics are not available yet**: Metrics Server scrapes every 15 seconds. Retry after the first scrape completes.

Official docs: [kubernetes-sigs/metrics-server](https://github.com/kubernetes-sigs/metrics-server).