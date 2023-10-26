import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextProvider } from '../App'
import Button from '../components/button'
import InputFields from '../components/inputFields'

const SignUp = () => {
  const theme = useContext(ContextProvider);
  return (
    <>
        <div className='h-screen w-screen flex items-center'>
          <div className='w-full'>
            <h1 className='text-center text-[25px] leading-[25px] md:text-[35px] md:leading-[35px] ld:text-[40px] leading-[40px] text-emerald-700 font-bold font-rubik'>
              Create Your Account Today!
            </h1>
            <div className="text-gray-500 mt-4 text-sm md:w-[50%] mx-auto text-center">
              Unlock the Ultimate Geek Experience on Geekers!
              <br />
               join Geekers for Geeky fun.
            </div>

            <div className="mt-10 mx-auto w-[700px]">
              <div className="flex">
                <div className='md:border-r md:border-r-gray-300 w-[50%] p-5'>
                  <form action="#" method='post' className='flex flex-col gap-y-4'>
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
                </div>

                <div className='p-5 w-[50%]'>
                  <div className="flex flex-col gap-4">
                    <Button 
                      buttonText={'Sign in with Google'}
                      outline={true}
                    />
                    <Button 
                      buttonText={'Sign in with Facebook'}
                      outline={true}
                    />
                    <Button 
                      buttonText={'Sign in with Apple'}
                      outline={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SignUp