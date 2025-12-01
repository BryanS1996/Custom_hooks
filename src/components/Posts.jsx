import { useFetch } from "../hooks/useFetch";

export function Posts() {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Cargando...</p>;
  
  if (!data) return <p>No hay datos disponibles</p>; 

  return (
    <div>
      <h2>Posts</h2>
      {/*(optional chaining) */}
      {data.slice(0, 5).map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
