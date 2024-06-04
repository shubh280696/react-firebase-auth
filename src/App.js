import React from 'react'
import './App.css'
import Login from './componets/Login'
import Home from './componets/Home'
import Register from './componets/Register'
import Form from './componets/Form'
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
const App = () => {
  return (

    <>
    <Router>
      <Routes>
        <Route>
          <Route path='/' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/form' element={<Form/>}/>
        </Route>


      </Routes>


    </Router>


    
    </>
  )
}

export default App