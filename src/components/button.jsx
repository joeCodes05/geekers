import React from 'react'

const Button = ({ buttonText, outline, width }) => {
  return (
    <>
        <button className={outline ? `py-2 px-5 shadow-lg rounded-md outline-none ring-2 ring-emerald-700 bg-transparent text-emerald-700 ${width}` : `py-2 px-5 shadow-lg rounded-md ring-2 ring-emerald-700 bg-emerald-700 duration-700 hover:bg-emerald-800 hover:ring-emerald-800 text-white ${width}`}>
            {buttonText}
        </button>
    </>
  )
}

export default Button