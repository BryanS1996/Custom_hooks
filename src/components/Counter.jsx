import { useCounter } from "../hooks/useCounter";

export function Counter() {
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

