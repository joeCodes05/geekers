import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/button'
import heroImg from '../assets/images/hero_img.png'

const Hero = () => {
  return (
    <>
        <section className='hero_section'>
          <div className='h-full py-[7rem] w-screen place-items-center grid text-center'>
            <div>
              <h1 className='text-emerald-700 text-2xl leading-[24px] md:text-5xl md:leading-[48px] font-rubik capitalize'>Unleash your inner <br /> superhero in the digital age.</h1>
              <p className="mt-3 text-gray-500 w-full md:w-[70%] lg:w-[55%] mx-auto text-sm">
                In a tech-driven world, Geekers are the unsung heroes, wielding knowledge, creativity, and passion. Embrace your inner superhero and let's change the world one code at a time!"
              </p>
              <div className="mt-6">
                <div className="flex gap-4 mx-auto w-fit">
                  <Link to={'/articles'} className='no-underline w-fit'>
                    <Button 
                      buttonText={'Read Articles'}
                      outline={true}
                    />
                  </Link>
                  <Link to={'/community'} className='no-underline w-fit'>
                    <Button 
                      buttonText={'Join Community'}
                      outline={false}
                    />
                  </Link>
                </div>
              </div>
              <div className="mt-6">
                <img src={heroImg} className='mx-auto' width={'400'} alt="laptop code mockup" />
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Hero