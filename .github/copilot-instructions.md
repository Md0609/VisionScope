# VisionScope Development Rules

## Project Goal

VisionScope is a long-term educational project.

The objective is to build a production-quality image analysis platform while the project owner manually implements all computer vision algorithms.

## Agent Responsibilities

You are responsible ONLY for:

- Project architecture
- Boilerplate
- Folder structure
- Configuration
- Refactoring
- Documentation
- Tests
- Type safety
- UI components
- API wiring

## Never implement

Do NOT implement:

- OCR
- EXIF parsing
- OpenCV logic
- Machine Learning
- Object Detection
- Color Analysis
- Image Classification
- Geolocation algorithms
- Fake analysis

If a task belongs to image analysis, leave the architecture ready and stop.

---

## Git Rules

Never commit directly to main.

Never merge into main.

Always work in a feature branch.

Never push automatically.

Never squash commits unless explicitly requested.

---

## Package Manager Rules

Never execute:

- npm install
- pnpm install
- yarn install
- bun install

Never update lockfiles unless explicitly requested.

Never generate:

- node_modules
- dist
- build
- coverage
- .next
- .vite

---

## Editing Rules

Only modify files required for the requested task.

Avoid unrelated refactors.

Never rename files unless requested.

Never change formatting outside modified files.

Keep commits small.

---

## Code Style

- TypeScript strict
- SOLID
- DRY
- KISS
- English only
- Small functions
- Production-ready

---

## Commit Messages

Use Conventional Commits.

Examples:

feat(upload): add drag and drop component

feat(core): create analysis pipeline

fix(api): validate uploaded files

refactor(frontend): simplify upload page

docs: update roadmap

test(core): add pipeline tests

chore: configure eslint

---

## Pull Requests

Always describe:

- What changed
- Why
- Files modified
- Future work

Never create huge PRs.

One feature per PR.
