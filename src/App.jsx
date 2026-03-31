import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <>
      <div className="min-h-screen bg-white">
        <ToastContainer position="top-right" autoClose={1500}></ToastContainer>

        <Navbar cart={cart} setActiveTab={setActiveTab}></Navbar>
      </div>
    </>
  )
}

export default App
