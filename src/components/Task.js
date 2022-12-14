import React from 'react'
import{ FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onChange }) => {
  return (
    <div className= {`task ${task.completed ? 'completed' : ''}`} onDoubleClick={() => ontoggle(task.id)}>
        <h3>
        {task.title}
        <FaTimes 
        style={{ color: 'red', cursor: 'pointer'}}
        onClick={() => onDelete(task.id)}
        />
        </h3>
      <p>{task.day}</p>
    </div>
  ) 
}

export default Task
