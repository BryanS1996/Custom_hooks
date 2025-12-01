
# 🧩 Proyect: Custom Hooks (React + Vite)

## Members: Bryan Chileno, Abel Navarrete 

This repository contains a small example project that demonstrates how to create and use Custom Hooks in React to reuse logic and keep components clean.

The project uses React and Vite, and includes reusable hooks and example components.

---

## 🚀 Technologies
- React (according to package.json): 19.x
- Vite
- JavaScript (ES Modules)

---

## 📦 Installation

```powershell
git clone https://github.com/BryanS1996/Custom_hooks.git
cd Custom_hooks
npm install
```

Note for Windows/PowerShell: if `npm run dev` fails due to execution policy restrictions, you can use `npm.cmd run dev` or run PowerShell as Administrator and adjust the policy using `Set-ExecutionPolicy RemoteSigned`.

---

## ▶ Run in Development

```powershell
npm.cmd run dev
```

Then open `http://localhost:5173` in your browser.

---

## 🏗 Project Structure

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

## 🧩 Included Hooks and Examples

### `useCounter` (src/hooks/useCounter.js)
A simple hook for managing a `counter`.

Example usage in Counter.jsx:

```jsx
import { useCounter } from '../hooks/useCounter';

const { count, increment, decrement, reset } = useCounter(3);
```

### `useFetch` (src/hooks/useFetch.js)
A hook for consuming APIs using `fetch`.

Quick example:

```jsx
const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts');
```

Note: `Posts.jsx` already handles `null` when no data is available.

`useLocalStorage` (src/hooks/useLocalStorage.js)

A hook to persist state in `localStorage`.

Example:

```jsx
const [theme, setTheme] = useLocalStorage('theme', 'light');
```

---

## ⚙ Componentes principales
- `Counter` — demo de `useCounter` (botones +, -, reset).
- `Posts` — muestra posts consumidos con `useFetch`.
- `ThemeToggle` — cambia tema usando `useLocalStorage` y aplica `data-theme` en el `documentElement`.

---

## References: 
- https://react.dev/learn/reusing-logic-with-custom-hooks