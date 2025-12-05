import { useFetch } from "../hooks/useFetch";

export function Posts() {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

  // Usamos el loader animado
  if (loading) return (
    <div className="card-container loader-container">
      <span className="loader"></span>
    </div>
  );

  return (
    <div className="card-container"> {/* <--- Clase para el fondo de vidrio */}
      <h2>📢 Últimas Publicaciones</h2>
      
      <div className="posts-grid">   {/* <--- Clase para la grilla */}
        {data.slice(0, 6).map(post => (
          <div key={post.id} className="post-card"> {/* <--- Clase para la tarjeta individual */}
            <h4>{post.title}</h4>
            <p className="post-body">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}