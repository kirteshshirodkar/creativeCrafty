import React from 'react'
import Footer from './components/common/Footer'
import Navbar from './components/common/navbar'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <div>
      <AppRoutes/>
    </div>
  )
}
