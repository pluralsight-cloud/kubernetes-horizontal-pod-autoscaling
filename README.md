# Horizontal Pod Autoscaling in Kubernetes

Globomantics demo site for a Pluralsight course on Horizontal Pod Autoscaling. The original static HTML site is now a Next.js application that you can run locally, package as a container, and deploy to Kubernetes.

This site is for demonstration only and does not offer real products or services.

## Project structure

```text
application/          Next.js 16 app and Dockerfile
  app/                Pages: home, our-story, robotics, media
  components/         Shared header, footer, and layout pieces
  public/images/      Site images
  Dockerfile          Multi-stage production image
k8s/
  deployment.yaml     Globomantics Deployment
  service.yaml        ClusterIP Service
```



## Prerequisites

- Node.js 20 or later
- npm
- Docker
- A Kubernetes cluster and `kubectl` (Docker Desktop, minikube, or kind)



## Run locally

```bash
cd application
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).


| Path         | Page      |
| ------------ | --------- |
| `/`          | Home      |
| `/our-story` | Our Story |
| `/robotics`  | Robotics  |
| `/media`     | Media     |


Production build without Docker:

```bash
cd application
npm run build
npm start
```



## Build and run with Docker

From the `application` directory:

```bash
docker build -t globomantics:latest .
docker run --rm -p 3000:3000 globomantics:latest
```

The container listens on port 3000.

## Deploy to Kubernetes

Apply the manifests from the repository root:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

Check the rollout and open the site:

```bash
kubectl get pods,svc -l app=globomantics
kubectl port-forward service/globomantics 3000:80
```

Then open [http://localhost:3000](http://localhost:3000).

The Deployment runs one replica of `globomantics:latest` on port 3000. The Service exposes that workload on port 80 inside the cluster.