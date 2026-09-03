# Module 03: **Pod Disruption Budgets, Demo 02: Demonstrating a PDB on Docker Desktop**

Apply the Pod Disruption Budget from the repository root:

```bash
kubectl apply -f k8s/pdb.yaml
```

Confirm the PDB is active and that disruptions are allowed while enough pods are ready:

```bash
kubectl get pods -l app=globomantics
kubectl get pdb globomantics
kubectl describe pdb globomantics
```

With `minAvailable: 1` and at least two ready pods, `ALLOWED DISRUPTIONS` should be `1`.

## Trigger a voluntary disruption

Docker Desktop usually has a single node named `docker-desktop`. Drain only the Globomantics pods so system pods stay running:

```bash
kubectl drain desktop-control-plane --ignore-daemonsets --delete-emptydir-data --pod-selector=app=globomantics
```

Watch what happens:

1. The node is cordoned, so new pods cannot schedule on it.
2. One Globomantics pod is evicted successfully.
3. The drain then blocks on the last pod because evicting it would violate the PDB.

In another terminal, confirm the budget is protecting the remaining pod:

```bash
kubectl get pdb globomantics
kubectl get pods -l app=globomantics
```

`ALLOWED DISRUPTIONS` should be `0`, and the drain command should still be waiting.

Stop the drain with `Ctrl+C`, then bring the node back:

```bash
kubectl uncordon desktop-control-plane
```

Confirm the Deployment recovers and disruptions are allowed again:

```bash
kubectl get pods -l app=globomantics
kubectl get pdb globomantics
```

