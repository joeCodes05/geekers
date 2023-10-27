import React from 'react'
import { Link } from 'react-router-dom'
import * as BsIcons from 'react-icons/bs'
import InputFields from './inputFields'
import Button from './button'

const Footer = () => {
  const socialLinks = [
    {icon: <BsIcons.BsTwitter />, title: "X (Twitter)", path: "https://twitter.com/nathanCodes05"},
    {icon: <BsIcons.BsInstagram />, title: "Instagram", path: "https://www.instagram.com/nathancodes05/"},
    {icon: <BsIcons.BsGithub />, title: "Github", path: "https://github.com/joeCodes05"},
  ]

  const d = new Date();
  const currentYear = d.getFullYear();

  return (
    <>
        <footer className='py-[5rem] bg-gray-100'>
          <div className="w-[95%] mx-auto">
            <div className="md:flex md:flex-row md:flex-wrap lg:flex-nowrap">
              <div className="md:basis-1/1 lg:basis-1/2">
                <Link to={'/'} className='text-4xl font-rubik text-emerald-700'>Geekers</Link>

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
              <div className="md:basis-1/2 mt-5 md:mt-5 lg:mt-0 lg:basis-1/4">
                <h4 className='text-2xl font-rubik text-emerald-700'>Quick Links</h4>
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
              <div className="md:basis-1/2 mt-5 md:mt-5 lg:mt-0 lg:basis-1/3">
                <h4 className='text-2xl font-rubik text-emerald-700'>Newsletter</h4>
                <div className="mt-3">
                  <div className="text-gray-500 text-sm">
                    Want geeky news and updates? <br />
                    Sign up for our newsletter.
                  </div>
                  <div className="mt-3">
                    <form action='#' method='post' className="flex gap-3">
                      <InputFields 
                        inputType={'email'}
                        placeholder={'example@email.com'}
                      />
                      <Button 
                        buttonText={'Subscribe'}
                        outline={false}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <hr className='my-14' />
            <div className="text-center text-gray-">
              &copy; {currentYear}, All rightserved.
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer