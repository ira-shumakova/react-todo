import React, {useState} from "react";
import TodosList from "./components/TodosList";
import TodoForm from "./components/TodoForm";
import "./styles/App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'First todo', body: 'Description'},
    { id: 2, title: 'Second todo', body: 'Description'},
    { id: 3, title: 'Third todo', body: 'Description'}
  ]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (todo) => {
    setTodos(todos.filter(item => item.id !== todo.id))
  }
 
  return (
    <div className="App">
      <TodoForm create={createTodo} title={"Create new one"} />
      { todos.length !== 0 
      ? 
        <TodosList todos={todos} title={"Your todos list"} remove={deleteTodo} />
      :
        <h2>Looks like all todos done</h2>
      }
    </div>
  );
}

export default App;
