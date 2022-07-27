import React from 'react'
import { Home , SharedHeadLayout,SingleProduct } from './pages'
import './App.css';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedHeadLayout />} >
            <Route index element={<Home />} />
            <Route path=":productId" element={<SingleProduct />} />
      </Route>
      
    
    </Routes>
      
    </BrowserRouter>
  )
}

