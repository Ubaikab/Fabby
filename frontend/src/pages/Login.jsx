import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

  const [currentState, setCurrentState] = useState('Login')
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')


  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {

      if (currentState === 'Sign Up') {

        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }


      } else {

        const response = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }

      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)

    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])


  return (
    <div className='min-h-[60vh] flex items-center justify-center'>
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto gap-4 text-slate-800 px-4'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='font-black text-3xl text-slate-900'>{currentState}</p>
        <hr className='border-none h-[3px] w-8 bg-[var(--color-primary)] rounded-full' />
      </div>

      {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition' placeholder='Name' required />}
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition' placeholder='Email' required />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition' placeholder='Password' required />
      <div className='w-full flex justify-between text-sm mt-[=8px]'>
        <p className='cursor-pointer'> Forgot Password? </p>
        {
          currentState === 'Login'
            ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
            : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login</p>
        }
      </div>

      <button className='bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 rounded-xl font-bold transition-all shadow-lg shadow-[var(--color-primary)]/20 text-white px-10 py-3 mt-4 cursor-pointer'>{currentState === 'Login' ? 'Sign In' : 'Sign-Up'}</button>


      </form>
    </div>
  )
}

export default Login
