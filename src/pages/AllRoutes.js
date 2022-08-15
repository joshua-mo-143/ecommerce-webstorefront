import { Cart } from "./Cart";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { Route, Routes, Navigate, useLocation} from 'react-router-dom';

import React from 'react'

export const AllRoutes = () => {
    const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
        
    <Route path='/' element={<Home/>} exact/>
    <Route path='login' element={<Login/>}/>
    <Route path='register' element={<Register/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path="*" element={<Navigate to="/" replace />}/>
</Routes>
  )
}
