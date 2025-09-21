# Hicham — Portfolio

React + Vite + Tailwind, avec GSAP et Three.js.

## Développement
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
```

## Déploiement sur Coolify (Static Site via Dockerfile)
1. Créez un nouveau **Application** dans Coolify → Type: *Dockerfile*.
2. Renseignez le repo Git ou uploadez l’archive.
3. Keep defaults; port 80 exposé par Nginx.
4. Déployez.

### Variables conseillées
- `NODE_ENV=production`

## Structure
- `src/components/*` — Sections animées avec GSAP
- `@react-three/fiber` + `drei` — Fond d’étoiles 3D
- `Dockerfile` + `nginx.conf` — pour un hosting statique optimisé
