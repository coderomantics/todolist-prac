import './Todo.css';
import React from 'react'


function Todo(props) {
  const todo = props.todo
  const delToDo = props.del;

  return (
    <>
    <div className={todo.urgency + ' todo'}>
        <input className='checkbox' type="checkbox"></input>
        <div className='task-and-urgency'>
            <h2 className='task-title'>{todo.task}</h2>
            <p>{todo.urgency}</p>
        </div>
        <button className="delete-btn" type="button" onClick={()=> delToDo(todo)}>✖️</button>
    </div>
    </>
  );
}

export default Todo;
