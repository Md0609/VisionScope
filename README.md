# VisionScope

VisionScope v0.2 - minimal scaffold for frontend and backend with upload support.

Quick start

- Frontend
  - cd frontend
  - npm install
  - npm run dev (starts Vite dev server)

- Backend
  - cd backend
  - npm install
  - npm run dev (starts Fastify via tsx)

API endpoints

- GET /health -> { status: 'ok' }
- POST /upload -> accepts form field "image" and saves file to backend/uploads; returns { status, filename, size }

Notes and next steps

- Tailwind: configuration files are included in frontend/; run `npm install -D tailwindcss postcss autoprefixer` in frontend and import the generated CSS into main.tsx to enable Tailwind styles.
- ESLint & Prettier: base configs are provided at repo root — install dev dependencies and run linters as desired.
- Computer-vision features (OCR, EXIF, OpenCV, ML, analysis) are intentionally NOT implemented. Where applicable TODO comments mark places for future CV modules.

Project structure

- frontend/: Vite + React app
- backend/: Fastify TypeScript API

Contributions

Open issues and PRs are welcome.

