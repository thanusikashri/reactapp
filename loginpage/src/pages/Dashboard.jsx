import React from 'react'
import { useNavigate } from 'react-router-dom'
import useStore from '../store/userStore'

export default function Dashboard() {
    const {username, theme, toggleTheme, logout} = useStore()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    const isDark = theme === 'dark'

    const pageStyle = {
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black'
    }
    return (
        <div style={pageStyle}>
            <h1>Welcome!!! {username}</h1>
            <button onClick={toggleTheme} style={styles.button}>
                Switch to {isDark ? 'Light' : 'Dark'} Mode </button>

        <button onClick={handleLogout} style={styles.button}>Logout</button>
        </div>
    )}

    const styles = {
        button: {
        padding: '10px 20px',
        margin: '10px',
        cursor: 'pointer',
  }}