import React, { useState } from "react";
import './UserInput.css';
import Todo from '../TodoClass';

const UserInput = (props) => {
    const addTodo = props.addTask;
    const [task, setTask] = useState('')
    const [urgency, setUrgency] = useState('')


    function submitHandler(event) {
        event.preventDefault();
        if (task === '' || urgency === '') {
            alert('please select a field')
            return;
        }
        const todo = new Todo(task, false, urgency)
        addTodo(todo);
        setTask('')
    }

    return (
        <>
        <form onSubmit={submitHandler} className='form'>
            <input id='input' type='text' onChange={(event) => setTask(event.target.value)} value={task}></input>
            <select name="urgency" id='urgency-selector' value={urgency} onChange={(event) => setUrgency(event.target.value)}>Urgency
                <option value=''><strong id="priority">--Priority--</strong></option> 
                <option value='not-urgent'>Not Urgent</option>
                <option value='moderate'>Moderate</option>
                <option value='urgent'>Urgent</option>
            </select>
            <button id='add-btn'><h3>Add</h3></button>
        </form>
        </>
    )
}

export default UserInput;