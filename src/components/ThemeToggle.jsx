import { useLocalStorage } from "../hooks/useLocalStorage";

export function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div>
      <h2>Tema actual: {theme}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Cambiar Tema
      </button>
    </div>
  );
}
