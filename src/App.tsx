import React, {useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import ToDo from './todo.model';

function App() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: text, text:text }])
  }

  const DeleteTodoHandler = (idToDelete: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== idToDelete)
    })
  }

  return (
    <div className="App">
      <NewTodo onAdd={addTodoHandler}/>
      <TodoList items={todos} onDelete={DeleteTodoHandler}/>
    </div>
  );
}

export default App;
