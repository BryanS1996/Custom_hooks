import { useCounter } from "../hooks/useCounter";

export function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="card-container"> {/* <--- El marco de vidrio */}
      <h2>Contador</h2>
      
      {/* Estilo inline solo para el número grande */}
      <h1 style={{ fontSize: '3rem', margin: '10px 0', color: 'var(--primary)' }}>
        {count}
      </h1>
      
      <div className="counter-controls">
        <button onClick={decrement}>-1</button>
        <button onClick={reset} className="secondary">Reset</button> {/* Clase secondary */}
        <button onClick={increment}>+1</button>
      </div>
    </div>
  );
}