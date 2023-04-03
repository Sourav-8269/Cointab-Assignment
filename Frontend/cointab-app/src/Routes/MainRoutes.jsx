import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Register from '../Components/Register'
import Login from '../Components/Login'
import Home from '../Components/Home'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Register/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/home" element={<Home/>} ></Route>
    </Routes>
  )
}

export default MainRoutes