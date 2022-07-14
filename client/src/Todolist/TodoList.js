import './TodoList.css';
import React from 'react'
import Todo from '../Todo/Todo';


function TodoList(props) {
  const list = props.list;
  const del = props.del;
  
  const renderList = list.map((todo) => {
  return (
   <Todo key={todo.id} todo={todo} del={del}/>
  )})

  return (
    <>
    <div className='list-container'>
    {renderList}
    </div>
    </>
  );
}

export default TodoList;
