# Module 01: **Using HPAs for autoscaling, Demo 02: Setting up a deployment with a HPA**

Apply the Horizontal Pod Autoscaler from the repository root:

```bash
kubectl apply -f k8s/hpa.yaml
```

Generate load against the Globomantics Service so CPU usage rises and the HPA scales the Deployment up. Leave this running in one terminal:

```bash
kubectl run -i --rm --tty load-generator --image=busybox:1.36 --restart=Never -- /bin/sh -c "while true; do wget -q -O- http://globomantics/; done"
```

In another terminal, watch the HPA react:

```bash
kubectl get hpa globomantics --watch
```

You should see the replica count increase above the minimum. Stop the load generator with `Ctrl+C` when you are done; the HPA will scale back down after the cooldown period.
