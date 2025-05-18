import React from 'react'
import axios from 'axios'
import { useNavigate, } from 'react-router-dom'
import { useState} from 'react'
import '../App.css'
 
function Login() {
    const[username, setUsername]=useState('')
    const[password, setPassword]=useState('')
    const navigate =useNavigate()
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/login',{username,password})
        .then((res)=>{
            console.log(res)
            alert(res.data.message)
            navigate('')
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
            alert(err)
        })
    }
  return (
    <div className='form'>
        <h1>Login form</h1>
         <form onSubmit={handleSubmit}  method='post'>
 Username: <br />
    <input type="text" value={username} onChange={e=>setUsername(e.target.value)}  placeholder='Enter your Username'  required />   <br />     
Password: <br />
    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder='Enter your password' required /> <br />
<br />
<button type='submit'>Loggin</button>
            </form>
    </div>
  )
}

export default Login