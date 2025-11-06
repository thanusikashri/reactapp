import { useState } from 'react'
import useStore from './store/userStore'

function SetName() {
  const [input, setInput] = useState('')
  const setUsername = useStore((state) => state.setUsername)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsername(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Enter</button>
    </form>
  )
}

function DisplayName() {
  const username = useStore((state) => state.username)
  return <h2>Username: {username}</h2>
}

function App() {
  return (
    <div className="app">
      <h1>Zustand</h1>
      <SetName />
      <DisplayName />
    </div>
  )
}

export default App