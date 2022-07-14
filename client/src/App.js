import './App.css';
import React, { useEffect, useState } from 'react'
import TodoList from './Todolist/TodoList';
import UserInput from './UserInput/UserInput';
import { ApiClient } from './apiClient';
import Todo from './TodoClass';

function App() {
  const [todos, setTodos] = useState([]);

  const api = new ApiClient()

  async function addTodo(todo) {
    const todofromDB = await api.postTodo(todo)
    todo.setId(todofromDB.id)
    setTodos(todos.concat([todo]));
  }

  function deleteToDo(todo) {
    console.log(todo)
    const newArr = todos.filter((el) => el.id !== todo.id)
    console.log(newArr);
    setTodos(newArr);
    api.deleteTodo(todo)
  }

  useEffect(() => {
    (async () => {
      const data = await api.getTodos()
      console.log(data)
      setTodos(data.map((todo) => new Todo(todo.task, todo.status, todo.urgency, todo.id)))
      //setTodos(data);
    })()
  }, [])


  return (
    <>

    <div className='app-container'>
    <h1>Get Shit Done!</h1>
    <UserInput addTask={addTodo}/>
    <TodoList list={todos} del={deleteToDo}/>
    </div>
    </>
  );
}

export default App;
