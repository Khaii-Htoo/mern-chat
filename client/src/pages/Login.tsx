import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; 
import { firebaseAuth } from '../utils/firebaseConfig';
const Login = () => {

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(firebaseAuth, provider);
    console.log(user);
  }

  return (
    <div className='w-full h-screen justify-center items-center'>
      <div className=" flex items-center">
        <div className="w-full max-w-md p-6 mx-auto bg-white rounded-md shadow-md">
          <h1 className="text-3xl font-semibold text-center text-primary">Login Your Account</h1>
          <form className="mt-6">
            <div className="w-full mb-2">
              <label className="block text-sm font-medium text-gray-600">Email Address</label>
              <input type="email" className="w-full px-4 py-3 mt-2 text-gray-700 bg-gray-200 rounded-md " placeholder="Email Address" />
            </div>
            <div className="w-full mt-4">
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input type="password" className="w-full px-4 py-3 mt-2 text-gray-700 bg-gray-200 rounded-md " placeholder="Password" />
            </div>
            <div className="flex items-center justify-between mt-4 " onClick={handleLogin}>
              <div className="w-full py-2 px-4 flex text-lg items-center justify-center gap-x-3 rounded-md font-semibold bg-gray-200 text-slate-500">
                <img className='size-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="" />
               <p> Login With Google</p>
                </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button type="submit" className="w-full py-2 px-4 bg-primary text-white rounded-md focus:bg-blue-600 focus:outline-none">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login