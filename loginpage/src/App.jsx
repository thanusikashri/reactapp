import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import useStore from './store/userStore'

export default function App(){
  const username = useStore((state) => state.username)
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/> } />
    </Routes>
    </BrowserRouter>
  )
}