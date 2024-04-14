import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/pages/home/index.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/pages/login/index.tsx'
import AdminDashboard from './components/pages/admin-dashboard/index.tsx'
import Companies from './components/pages/admin-dashboard/companies/fetch-all-companies/index.tsx'
import CreateCompany from './components/pages/admin-dashboard/companies/create-companie/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <Home /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/admin' element={ <AdminDashboard /> }/>
        <Route path='/companies' element={ <Companies /> }/>
        <Route path='/companies/create' element={ <CreateCompany /> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
