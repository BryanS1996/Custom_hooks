📌 Introduction

Custom Hooks are one of React’s most powerful features. They let you share stateful logic between multiple components without duplicating code.

React Router provides hooks like useParams and useNavigate. Similarly, you can create your own hooks to encapsulate:

Side effects (useEffect)

Reusable state (useState)

API fetching

Document title updates

Form logic

Event listeners and more

A Custom Hook is just a function that:

Starts with use

Uses other React hooks inside it

⚙️ Setup

Install dependencies:

npm install


Run the backend:

npm run server


Run the frontend:

npm start


This project focuses on two components:

HomePage

ArticlePage

Both share similar logic — making them ideal for Custom Hooks.

🎣 Creating a Custom Hook: useDocumentTitle

Both HomePage and ArticlePage update the browser’s document title using useEffect.

To avoid repeating code, extract that logic into a custom hook:

/src/hooks/useDocumentTitle.js
import { useEffect } from "react";

function useDocumentTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
}

export default useDocumentTitle;

🧪 Using it:
useDocumentTitle("Underreacted | Home");

🔄 Creating a Data Fetching Hook: useQuery

Both HomePage and ArticlePage fetch data from the API using useState and useEffect.

We can extract that repeated logic:

/src/hooks/useQuery.js
import { useState, useEffect } from "react";

function useQuery(url) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoaded(false);
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setData(data);
        setIsLoaded(true);
      });
  }, [url]);

  return { data, isLoaded };
}

export default useQuery;

🧪 Using it in HomePage:
const { data: posts, isLoaded } = useQuery("http://localhost:4000/posts");

🧪 Using it in ArticlePage:
const { data: post, isLoaded } = useQuery(`http://localhost:4000/posts/${id}`);

⭐ Possible Improvements

You could enhance the hook with:

Error handling

Abort controllers to cancel fetch

Caching

Using useReducer for state transitions

Memoization

Or use libraries like React Query, which offer advanced data-fetching hooks.

🏁 Conclusion

Custom Hooks help you:

✔ Reuse complex logic
✔ Create cleaner and smaller components
✔ Share state logic easily
✔ Improve maintainability

Custom Hooks are widely used in the React ecosystem (React Router, Redux).
Mastering them is essential for scalable and professional React development.