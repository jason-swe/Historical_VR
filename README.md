# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploy On Vercel

This app is ready for Vercel as a Vite SPA.

### Build settings

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

### Environment variables

Add this in Vercel if you want Google Street View to work reliably in production:

- `VITE_GOOGLE_MAPS_API_KEY`

### Routing

`vercel.json` includes a rewrite so React Router routes like `/map` and `/locations/:id` work after refresh.
