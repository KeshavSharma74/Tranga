import React from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
        </Routes>
        
        <Footer></Footer>
    </div>
  )
}

export default App