import React from 'react'
import { getAuth } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'

const Home = () => {
    console.log(getAuth())

    const navigate = useNavigate();
    const auth = getAuth();


    const logOut = async  ()=>{
      await auth.signOut();
      navigate('/')
    }
  return (

    <>
   <div className='container text-center'>
      <h1> Welcome to HomePage...</h1>
 <div className='my-5'>
    <h1>{auth.currentUser.displayName}</h1>
    <h2>{auth.currentUser.email}</h2>
    <img src={auth.currentUser.photoURL} alt="" />
 </div>
   <button className=' text-center  text-bg-primary' onClick={logOut}>Logout</button>
 </div>
    </>
  )
}

export default Home