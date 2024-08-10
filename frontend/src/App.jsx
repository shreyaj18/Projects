import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const CreateSignup = lazy(()=> import ('./components/CreateSignup'))
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { TopBar } from './components/TopBar'
const Login = lazy(()=> import('./components/Login'))

function App() {
 

  return (
  <div>
    <BrowserRouter>
    <TopBar></TopBar>
    <Routes>
      <Route path="/" element={<Suspense fallback={"loading..."}><CreateSignup/></Suspense>}></Route>
      <Route path="/login" element={<Suspense fallback={"loading..."}><Login/></Suspense>}/>
    </Routes>
      
    </BrowserRouter>
  </div>
  )
}

export default App
