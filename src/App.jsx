import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = 'https://dummyjson.com/todos';

  const getTodos = async url => {
    try {
      setLoading(true);
      const apiRes = await fetch(url);
      const data = await apiRes.json();

      console.log(data.todos);

      if (data?.todos && data?.todos?.length > 0) {
        setTodoList(data?.todos);
        setLoading(false);
        setError('');
      } else {
        setError('No data found');
      }
    } catch (error) {
      console.log(error);
      setError('Some Error Occurred Fetching Todos!');
    }
  };

  useEffect(() => {
    getTodos(url);
  }, []);

  return (
    <>
      <h1>Simple ToDo App</h1>
    </>
  );
}

export default App;
