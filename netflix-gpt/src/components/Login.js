import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <>
    <Header />
    <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_medium.jpg" alt="background"/>
    </div>
    <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
        <h1 className='text-white font-bold text-xl my-8'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input type = "text" placeholder='Email Address'className='p-4 my-2 w-full bg-gray-700' />
        {!isSignInForm && <input type = "text" placeholder='Name'className='p-4 my-2 w-full bg-gray-700' />}
        <input type = "password" placeholder='Password' className='p-4 my-2 w-full bg-gray-700' />
        <button className='bg-red-700 py-4 my-8 w-full text-white rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='text-white' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
    </form>
    </>
  )
}

export default Login