import React ,{useState} from 'react'
import { Home , SharedHeadLayout,SingleProduct } from './pages'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const App = () => {
  const [search, setSearch] = useState('');
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedHeadLayout search={search} setSearch={setSearch} />} >
            <Route index element={<Home search={search}/>} />
            <Route path=":productId" element={<SingleProduct />} />
      </Route>
      
    
    </Routes>
      
    </BrowserRouter>
  )
}

