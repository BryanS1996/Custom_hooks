import { useFetch } from "../hooks/useFetch";

export function Posts() {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Cargando...</p>;
  
  // SOLUCIÓN: Si hubo un error y data es null, no intentes hacer slice
  if (!data) return <p>No hay datos disponibles</p>; 

  return (
    <div>
      <h2>Posts</h2>
      {/* El ?. (optional chaining) también protege contra nulos */}
      {data.slice(0, 5).map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}