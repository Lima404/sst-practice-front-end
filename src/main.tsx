import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/pages/home/index.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/pages/login/index.tsx'
import AdminDashboard from './components/pages/admin-dashboard/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <Home /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/admin' element={ <AdminDashboard /> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
