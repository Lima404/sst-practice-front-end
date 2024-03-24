import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <Home /> }/>
        <Route path='/Login' element={ <Login /> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
