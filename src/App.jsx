import { Counter } from "./components/Counter";
import { Posts } from "./components/Posts";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Proyecto React con Custom Hooks</h1>
      <Counter />
      <Posts />
      <ThemeToggle />
    </div>
  );
}

export default App;
