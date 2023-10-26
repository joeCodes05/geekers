import React from 'react'
import { Link } from 'react-router-dom'
import * as BsIcons from 'react-icons/bs'

const Footer = () => {
  const socialLinks = [
    {icon: <BsIcons.BsTwitter />, title: "X (Twitter)", path: "https://twitter.com/nathanCodes05"},
    {icon: <BsIcons.BsInstagram />, title: "Instagram", path: "https://www.instagram.com/nathancodes05/"},
    {icon: <BsIcons.BsGithub />, title: "Github", path: "https://github.com/joeCodes05"},
  ]

  return (
    <>
        <footer className='py-[7rem] bg-gray-100'>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-row">
              <div className="basis-1/2">
                <Link to={'/'} className='text-4xl font-rubik font-bold text-emerald-700'>Geekers</Link>

                <div className="mt-3 w-full md:w-[60%] text-sm text-gray-500">
                  We are deeply passionate about software engineering.
                  We are tech enthusiasts and experts in this fields, we are forming communities to share insights.
                </div>
                <div className="mt-3">
                  <div className="flex flex-row gap-3">
                    {socialLinks.map((data, index) => {
                      const { path, icon, title } = data;
                      return (
                        <a href={path} key={index} className='no-underline'>
                          <button title={title} className='p-3 bg-emerald-700 duration-700 hover:bg-emerald-800 rounded-md text-white'>
                          {icon}
                        </button>
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="basis-1/4">
                <h4 className='text-2xl font-rubik text-emerald-700 font-bold'>Quick Links</h4>
                <div className="mt-3 flex flex-col gap-3">
                  <div>
                    <Link to={'/courses'} className='text-gray-500 no-underline duration-700 hover:text-emerald-700 hover:underline'>Courses</Link>
                  </div>
                  <div>
                    <Link to={'/articles'} className='text-gray-500 no-underline duration-700 hover:text-emerald-700 hover:underline'>Articles</Link>
                  </div>
                  <div>
                    <Link to={'/community'} className='text-gray-500 no-underline duration-700 hover:text-emerald-700 hover:underline'>Community</Link>
                  </div>
                  <div>
                    <Link to={'/faq'} className='text-gray-500 no-underline duration-700 hover:text-emerald-700 hover:underline'>FAQs</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer