# CODEBUDDY.md

This file provides guidance to CodeBuddy Code when working with code in this repository.

## Tech Stack

- **React 19** + **TypeScript 6** + **Vite 8**
- React uses Oxc via `@vitejs/plugin-react` (not SWC)
- React Compiler is not enabled

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Type-check (tsc -b) then build (vite build)
npm run lint      # ESLint check on all .ts/.tsx files
npm run preview   # Preview production build locally
```

### Single-file type checking

```bash
npx tsc --noEmit -p tsconfig.app.json
```

## Project Structure

```
my-app/
├── index.html              # Entry HTML, mounts <div id="root">
├── vite.config.ts          # Vite config with @vitejs/plugin-react
├── eslint.config.js        # Flat config: typescript-eslint + react-hooks + react-refresh
├── tsconfig.json           # References tsconfig.app.json and tsconfig.node.json
├── tsconfig.app.json       # App source config (src/), JSX: react-jsx
├── tsconfig.node.json      # Vite config config (vite.config.ts only)
├── public/                 # Static assets served at root (favicon.svg, icons.svg)
└── src/
    ├── main.tsx            # React entry: StrictMode + createRoot
    ├── App.tsx             # Root component
    ├── App.css             # Component styles
    ├── index.css           # Global styles
    └── assets/             # Imported assets (SVGs, images)
```

## TypeScript Configuration

- Split into two configs: `tsconfig.app.json` (app code in `src/`) and `tsconfig.node.json` (Vite config)
- Target: ES2023, module: ESNext, moduleResolution: bundler
- `erasableSyntaxOnly: true` enabled (TypeScript 6 feature)
- Strict lint flags: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`

## ESLint Configuration

- Uses flat config format (`eslint.config.js`)
- Plugins: `typescript-eslint` (recommended), `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- `dist/` is globally ignored
- React Refresh rule is configured for Vite (enforces component exports for HMR)
