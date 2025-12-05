# 🧩 Proyecto React con Custom Hooks  
*React Custom Hooks Project (English version below)*

Este es un proyecto demostrativo construido con **React + Vite**, que muestra cómo crear y usar **Custom Hooks** para reutilizar lógica y mejorar la organización del código.

Incluye hooks personalizados como:
- `useCounter` → Manejo de contadores  
- `useToggle` → Estados booleanos  
- `useFetch` → Consumo de APIs  
- `useForm` → Manejo de formularios  
- `useLocalStorage` → Persistencia en el navegador  

---

# 🇪🇸 **ESPAÑOL**

## 🚀 Tecnologías usadas
- React 18  
- Vite  
- JavaScript ES Modules  
- Fetch API  
- LocalStorage API  

---

## 📦 Instalación

```bash
git clone https://github.com/tu-usuario/react-custom-hooks.git
cd react-custom-hooks
npm install
```

---

## ▶ Ejecutar en modo desarrollo

```bash
npm run dev
```

Abrir en el navegador:  
👉 http://localhost:5173/

---

## 🏗 Estructura del proyecto

```plaintext
📁 src
 ├── 📁 hooks
 │    ├── useCounter.js
 │    ├── useFetch.js
 │    ├── useToggle.js
 │    ├── useForm.js
 │    └── useLocalStorage.js
 │
 ├── components
 │    ├── Counter.jsx
 │    ├── UsersList.jsx
 │    ├── ToggleBox.jsx
 │    ├── FormExample.jsx
 │    └── LocalStorageExample.jsx
 │
 ├── App.jsx
 ├── main.jsx
 └── styles.css
```

---

## 🧩 Custom Hooks incluidos

### 🔢 `useCounter`
Controla un contador.

```js
const { counter, increase, decrease, reset } = useCounter(0);
```

---

### 🌐 `useFetch`
Para consumir APIs.

```js
const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
```

---

### 🎚️ `useToggle`
Maneja valores booleanos.

```js
const { value, toggle } = useToggle(false);
```

---

### 📝 `useForm`
Manejo de formularios.

```js
const { form, handleChange, resetForm } = useForm({ name: "", email: "" });
```

---

### 💾 `useLocalStorage`
Lee y guarda información en el navegador.

```js
const [value, setValue] = useLocalStorage("key", "valor inicial");
```

---

## 📗 ¿Qué son los Custom Hooks?

Son funciones que:
✔ Comienzan con `use`  
✔ Usan otros hooks de React  
✔ Permiten reutilizar lógica entre componentes  

Documentación oficial:  
https://react.dev/learn/reusing-logic-with-custom-hooks

---

# 🇺🇸 **ENGLISH VERSION**

# 🧩 React Custom Hooks Project

This is a demonstration project built with **React + Vite**, showing how to create and use **Custom Hooks** to reuse logic and improve code organization.

Includes custom hooks such as:
- `useCounter` → Counter logic  
- `useToggle` → Boolean state control  
- `useFetch` → API consumption  
- `useForm` → Form handling  
- `useLocalStorage` → Persistent storage  

---

## 🚀 Technologies Used
- React 18  
- Vite  
- JavaScript ES Modules  
- Fetch API  
- LocalStorage API  

---

## 📦 Installation

```bash
git clone https://github.com/your-username/react-custom-hooks.git
cd react-custom-hooks
npm install
```

---

## ▶ Run in Development Mode

```bash
npm run dev
```

Open the browser:  
👉 http://localhost:5173/

---

## 🏗 Project Structure

```plaintext
📁 src
 ├── 📁 hooks
 │    ├── useCounter.js
 │    ├── useFetch.js
 │    ├── useToggle.js
 │    ├── useForm.js
 │    └── useLocalStorage.js
 │
 ├── components
 │    ├── Counter.jsx
 │    ├── UsersList.jsx
 │    ├── ToggleBox.jsx
 │    ├── FormExample.jsx
 │    └── LocalStorageExample.jsx
 │
 ├── App.jsx
 ├── main.jsx
 └── styles.css
```

---

## 📘 What Are Custom Hooks?

They are functions that:  
✔ Start with `use`  
✔ Use React’s built-in hooks  
✔ Allow reusing logic across components  

Official docs:  
https://react.dev/learn/reusing-logic-with-custom-hooks