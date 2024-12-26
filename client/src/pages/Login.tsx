import React, { useEffect } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebaseConfig';
import axios from 'axios';
import loginImage from '../assets/image/loginImg.gif'
const Login = () => {

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(firebaseAuth, provider);
    if(user){
      const res = await axios.post(`http://localhost:5000/api/checkUser`, { email: user.email });
      console.log(res.data);
    }

  }
  return (
    <div className='w-full h-screen justify-center items-center bg-primary'>
      <div className=" flex items-center justify-center pt-32">
        <div className=' flex-col justify-center' >
          <img className=' w-[270px]  h-52 mx-auto' src={loginImage} />
          <div className="flex items-center justify-between mt-4 " onClick={handleLogin}>
            <div className="w-full py-2 px-4 flex text-lg items-center cursor-pointer  justify-center gap-x-3 rounded-md font-semibold bg-gray-200 text-slate-500">
              <img className='size-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="" />
              <p> Login With Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login