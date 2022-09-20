
import { useState } from 'react'
import React from 'react'

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [day, setDay] = useState('')
  const [completed, setCompleted] = useState(false)
  const [email, setMail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!title) {
      alert('Please add a task')
      return
    }

    onAdd({ title, day, completed, email })

    setTitle('')
    setDay('')
    setCompleted(false)
    setMail('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>E-mail</label>
        <input
          type='text'
          placeholder='E-mail'
          value={email}
          onChange={(e) => setMail(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Completed</label>
        <input
          type='checkbox'
          checked={completed}
          value={completed}
          onChange={(e) => setCompleted(e.currentTarget.checked)}
        />

      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask