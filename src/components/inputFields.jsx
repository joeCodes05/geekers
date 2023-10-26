import React from 'react'

const InputFields = ({ inputType, placeholder }) => {
  return (
    <>
        <input type={inputType} placeholder={placeholder} className='block w-full p-2 shadow-md ring-1 ring-gray-300 rounded-md duration-700 focus:ring-emerald-700 outline-none' />
    </>
  )
}

export default InputFields