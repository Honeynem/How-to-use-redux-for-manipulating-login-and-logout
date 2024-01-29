import React, { useState } from 'react'
import { login , logout } from './Store'
import { useDispatch , useSelector } from 'react-redux'


const Login = () => {
    const [newUserName , setNewUserName] = useState('')
    const dispatch = useDispatch()
    const selector = useSelector((state)=> state.user)
  return (
    <div><h1>Login {selector.username}</h1>
      <input onChange={(event)=> setNewUserName(event.target.value)}/>
      <button onClick={()=> dispatch(login({username : newUserName}))}>Login</button>
      <button onClick={()=> dispatch(logout())}>Logout</button>
      
    </div>
  )
}

export default Login
