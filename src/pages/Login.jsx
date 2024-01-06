import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bannerImage from '../assets/img/space.jpg'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate()

  const handleLogin = () => {
    if (
      username.toLowerCase() === 'admin' &&
      password.toLowerCase() === 'admin'
    ) {
      navigate('/dashboard')
    } else {
      alert('Invalid credentials. Please try again.')
    }
  }

  return (
    <div className='flex flex-col justify-center md:h-screen itemrs-center md:flex-row'>
      <div className='bg-gray-200 md:h-screen md:w-2/3'>
        <img
          src={bannerImage}
          alt='rocket launching into space'
          className='object-cover w-full h-full'
        />
      </div>

      <div className='flex flex-col p-4 bg-white md:p-8 md:w-1/3 md:items-center md:justify-center'>
        <div className='w-full mb-4 md:mb-8'>
          <h1 className='mb-4 text-3xl font-bold md:mb-8'>SpaceVue</h1>
          <h2 className='text-xl font-semibold'>Login</h2>
        </div>

        <form onSubmit={handleLogin}>
          <input
            type='text'
            placeholder='Username'
            className='w-full px-3 py-2 mb-4 border rounded-md outline-none focus-visible:outline-slate-800'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            className='w-full px-3 py-2 mb-6 border rounded-md outline-none focus-visible:outline-slate-800'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type='submit'
            className='w-full px-4 py-2 text-white rounded-md outline-none bg-slate-800 focus-visible:outline-slate-800'
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
