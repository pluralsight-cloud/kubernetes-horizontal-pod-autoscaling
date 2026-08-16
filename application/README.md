# Globomantics

Next.js 16 App Router conversion of the Globomantics demo site.

## Pages

- `/` — Home
- `/our-story` — Our Story
- `/robotics` — Robotics
- `/media` — Media

## Getting Started

```bash
cd application
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

```bash
npm run build
npm start
```

## Docker

```bash
cd application
docker build -t globomantics .
docker run --rm -p 3000:3000 globomantics
```
