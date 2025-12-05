import { Counter } from "./components/Counter";
import { Posts } from "./components/Posts";
import { ThemeToggle } from "./components/ThemeToggle";
import "./App.css";  // <--- ¡ESTA LÍNEA ES OBLIGATORIA!

function App() {
  return (
    <div className="container"> {/* Asegúrate de usar className="container" aquí también */}
      <div className="header-row">
        <h1>Dashboard React</h1>
        <ThemeToggle />
      </div>
      <Counter />
      <Posts />
    </div>
  );
}

export default App;