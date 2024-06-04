// import React from 'react'
import React, { useState } from 'react'
import {auth} from '../firebase'

import {signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')
   
    const navigate = useNavigate();
    const HandleSubmit =  async (e)=>{
      e.preventDefault();
  
      try {
        const user= await signInWithEmailAndPassword(
          auth,
          email,
          password
        )
      navigate('/home')
        console.log(user)
      } catch (error) {
        
      }
    }
  

     const GoogleClick = async(e)=>{

        try {
             const provider = new GoogleAuthProvider();
             const result = await  signInWithPopup(auth, provider)
             navigate('/home')
        } catch (error) {
            
        }
     }
  return (

      <> 
      <div className=' container ' style={{width:"50%"}}>
      <h1 className='text-center my-5'>React-Firebase-Auth</h1>

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

  <button  

  style={{width:"40%"}}type="submit" class="btn btn-primary my-5">login</button>

 </div>
  <Link to={"/register"} className='text-white ' style={{margin:"40%"}}> Register New User</Link>
</form>
      </div>
       <div className="conatiner text-center d-flex justify-content-center align-items-center">
        <button 
          onClick={GoogleClick}
        className='btn  d-flex justify-content-center align-items-center w-75  bg-white  ' style={{color:"red"}} >
            <div style={{width:"14%"}}>
        <img  style={{width:"100%"}}src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
            </div>
       
            <div>  <h2 style={{fontWeight:"bold"}}> login with google</h2></div>

        </button>

       </div>
      
      </div>
    
    </>
  )
}

export default Login