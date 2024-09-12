import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/Header/Header'
import Footer from './pages/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <main>
        {<Outlet/>}
      </main>
      <Footer/>
    </div>
  )
}

export default App
