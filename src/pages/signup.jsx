import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextProvider } from '../App'
import Button from '../components/button'
import InputFields from '../components/inputFields'
import * as BsIcons from 'react-icons/bs'

const SignUp = () => {
  const theme = useContext(ContextProvider);
  return (
    <>
        <div className='h-screen w-screen flex items-center'>
          <div className='w-full'>
            <h1 className='text-center text-[25px] leading-[25px] md:text-[35px] md:leading-[35px] ld:text-[40px] lg:leading-[40px] text-emerald-700 font-bold font-rubik'>
              Create Your Account Today!
            </h1>
            <div className="text-gray-500 mt-4 text-sm md:w-[50%] mx-auto text-center">
              Unlock the Ultimate Geek Experience on Geekers!
              <br />
               join Geekers for Geeky fun.
            </div>

            <div className="mt-5 mx-auto px-5 md:px-0 w-full md:w-[450px]">
              <form action="#" method='post' className='flex flex-col gap-y-4'>
                  <div>
                    <InputFields 
                      inputType={'text'}
                      placeholder={'Full name'}
                    />
                  </div>
                  <div>
                    <InputFields 
                      inputType={'email'}
                      placeholder={'example@email.com'}
                    />
                  </div>
                  <div>
                    <InputFields 
                      inputType={'password'}
                      placeholder={'Password'}
                    />
                  </div>
                  <div>
                    <Button 
                      buttonText={'Create account'}
                      outline={false}
                      width={'w-full'}
                    />
                  </div>
                </form>
                <div className="mt-5 text-center text-gray-500">
                  Or sign up with
                </div>
                <div className="mt-5">
                  <div className="md:flex grid grid-cols-2 gap-4">
                    <button className='py-3 px-5 bg-[#ea4335] ring-2 ring-[#ea4335] w-full text-white flex items-center gap-3 rounded-md shadow-md'>
                        <BsIcons.BsGoogle /> Google
                    </button>
                    <button className='py-3 px-5 bg-[#3b5998] ring-2 ring-[#3b5998] w-full text-white flex items-center gap-3 rounded-md shadow-md'>
                        <BsIcons.BsFacebook /> Facebook
                    </button>
                    <button className='py-3 px-5 bg-[#0072b1] ring-2 ring-[#0072b1 ] w-full text-white flex items-center gap-3 rounded-md shadow-md'>
                        <BsIcons.BsLinkedin /> Linkedin
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SignUp