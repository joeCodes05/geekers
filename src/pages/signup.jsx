import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='max-w-lg'>
                <h1 className='text-accent text-center font-rubik text-[50px] leading-[50px] font-bold'>
                    Geekers
                </h1>
                <h5 className='text-gray-800 text-center font-poppins'>
                    Connect With Your Kind
                </h5>

                <form action="#" className='mt-4 flex gap-y-4 flex-col' method='post'>
                    <div className='username_input'>
                        <label htmlFor="username" className='text-gray-800 font-semibold'>Username</label>
                        <input type="text" className='w-[25rem] block p-1.5 outline-none ring-1 ring-gray-300 rounded-md focus:ring-2 focus:ring-accent'/>
                    </div>
                    <div className='email_input'>
                        <label htmlFor="email" className='text-gray-800 font-semibold'>Email address</label>
                        <input type="email" className='w-[25rem] block p-1.5 outline-none ring-1 ring-gray-300 rounded-md focus:ring-2 focus:ring-accent'/>
                    </div>
                    <div className='password_input'>
                        <label htmlFor="password" className='text-gray-800 font-semibold'>Password</label>
                        <input type="password" className='w-[25rem] block p-1.5 outline-none ring-1 ring-gray-300 rounded-md focus:ring-2 focus:ring-accent'/>
                    </div>
                    <div className='link_el'>
                        <div className="text-gray-500">
                            Already have an account? <Link to={'/signin'} className='text-accent underline'>Login</Link>
                        </div>
                    </div>
                    <div className="submit_btn">
                        <button className='w-full p-1.5 rounded-md font-rubik bg-accent ring-2 ring-accent text-primary'>Signin</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default SignUp