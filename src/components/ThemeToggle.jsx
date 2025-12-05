import { useEffect } from "react"; //
import { useLocalStorage } from "../hooks/useLocalStorage"; //

export function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  // ESTE ES EL CÓDIGO QUE TE FALTA
  useEffect(() => {
    // Si el tema es 'dark', agregamos la clase al body
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      // Si no, la quitamos
      document.body.classList.remove("dark");
    }
  }, [theme]); // Se ejecuta cada vez que 'theme' cambia

  return (
    <div>
      <h2>Tema actual: {theme}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Cambiar Tema
      </button>
    </div>
  );
}