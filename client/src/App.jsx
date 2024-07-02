import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

const routes = (
  <Router>
    <Routes>
      <Route path='/dashboard' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  </Router>
)
const App = () => {
  return (
    <div>{routes}</div>
  )
}

export default App