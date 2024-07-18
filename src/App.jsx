import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import classes from './styles.module.css';
import TodoItem from './components/todo-item';

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

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="todoWrapper">
      <h1 className={classes.headerTitle}>Simple ToDo App</h1>
      <div className={classes.todoList}>
        {todoList && todoList?.length > 0
          ? todoList.map(todo => <TodoItem key={todo.id} todo={todo} />)
          : null}
      </div>
    </div>
  );
}

export default App;
