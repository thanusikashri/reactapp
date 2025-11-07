import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import useStore from '../store/userStore'

export default function Login(){
    const [name, setName] = useState('')
    const setUsername = useStore((state) => state.setUsername)
    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()
        if (name.trim() === '') {
            alert('Please enter a name')
            return
        }
        setUsername(name)
        navigate('/dashboard')
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder='Enter username' value={name}
                onChange={(e) => setName(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}