import React from 'react';

const ToDoList = (props) =>{
    return(
        <>
    <div className='todo_style'>
    <li>{props.text}</li>
    </div>
        </>
    );
};

export default ToDoList;