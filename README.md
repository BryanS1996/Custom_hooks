
# 🧩 Proyecto: Custom Hooks (React + Vite)

Este repositorio contiene un pequeño proyecto de ejemplo que muestra cómo crear y usar *Custom Hooks* en React para reutilizar lógica y mantener componentes limpios.

El proyecto usa **React** y **Vite** y contiene hooks reutilizables y componentes de ejemplo.

---

## 🚀 Tecnologías
- React (según `package.json`): 19.x
- Vite
- JavaScript (ES Modules)

---

## 📦 Instalación

```powershell
git clone https://github.com/tu-usuario/Custom_hooks.git
cd Custom_hooks
npm install
```

Nota para Windows/PowerShell: si `npm run dev` falla por la política de ejecución, puedes usar `npm.cmd run dev` o ejecutar PowerShell como Administrador y ajustar la política (`Set-ExecutionPolicy RemoteSigned`).

---

## ▶ Ejecutar en desarrollo

```powershell
npm.cmd run dev
```

Luego abre `http://localhost:5173` en tu navegador.

---

## 🏗 Estructura relevante del proyecto

```plaintext
src/
 ├─ assets/
 ├─ components/
 │   ├─ Counter.jsx
 │   ├─ Posts.jsx
 │   └─ ThemeToggle.jsx
 ├─ hooks/
 │   ├─ useCounter.js
 │   ├─ useFetch.js
 │   └─ useLocalStorage.js
 ├─ App.jsx
 ├─ main.jsx
 ├─ index.css
 └─ App.css
```

---

## 🧩 Hooks incluidos y ejemplos

### `useCounter` (src/hooks/useCounter.js)
Hook simple para manejar un contador.

Ejemplo de uso en `Counter.jsx`:

```jsx
import { useCounter } from '../hooks/useCounter';

const { count, increment, decrement, reset } = useCounter(3);
```

### `useFetch` (src/hooks/useFetch.js)
Hook para consumir APIs con `fetch`.

Ejemplo breve:

```jsx
const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');
```

Nota: `Posts.jsx` ya protege contra `null` cuando no hay datos.

### `useLocalStorage` (src/hooks/useLocalStorage.js)
Hook para persistir estado en `localStorage`.

Ejemplo:

```jsx
const [theme, setTheme] = useLocalStorage('theme', 'light');
```

---

## ⚙ Componentes principales
- `Counter` — demo de `useCounter` (botones +, -, reset).
- `Posts` — muestra posts consumidos con `useFetch`.
- `ThemeToggle` — cambia tema usando `useLocalStorage` y aplica `data-theme` en el `documentElement`.

---
