import React, { useState } from 'react'
import {auth} from '../firebase'

import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const Register = () => {

  const [email, setEmail] = useState('')
  const [password , setPassword] = useState('')
 
  const navigate = useNavigate();
  const HandleSubmit =  async (e)=>{
    e.preventDefault();
  
    try {
      const user= await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
    navigate('/')
      console.log(user)
    } catch (error) {
      
    } 
  }

  return (

      <>
      <div className=' container ' style={{width:"50%"}}>
      <h1 className='text-center'>React-Firebase-Auth</h1>

      <div className="comntainer my-5">

      <form onSubmit={HandleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>

    <input
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
     type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>

    <input
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
    type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
 

 <div className='text-center'>

  <button  style={{width:"40%"}}type="submit" class="btn btn-primary my-3">Register</button>

 </div>
</form>
      </div>
      
      
      </div>
    
    </>
  )
}

export default Register