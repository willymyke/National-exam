import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:8000/register', { username, password })
            .then((res) => {
                console.log(res.data)
                alert(res.data.result)
                navigate('/login')
            })
            .catch((err) => {
                alert('Sorry: ' + (err.response?.data?.error || err.message))
            })
    }

    return (
        <div className='form'>
            <h1>Registration Form</h1> <br />
            <form onSubmit={handleSubmit} method='post'>
                Username: <br />
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder='Enter your Username'
                    required
                /> <br />
                Password: <br />
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Enter your password'
                    required
                /> <br /> 
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Register