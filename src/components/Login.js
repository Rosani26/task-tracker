import { render } from '@testing-library/react'
import React, { useState } from 'react'

const Login = (onAdd) => {
    const[password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!password) {
            alert('enter Password')
            return
        }
        onAdd({password})
        setPassword('')


    }
    
  return (
    <form className='login-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Password</label>
        <input
          type='text'
          placeholder='Password'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <input type='submit' value='Save' className='btn btn-block' />
      </form>
    
  )
  }


export default Login
