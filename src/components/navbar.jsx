import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Button from './button'

const navLinks = [
    {linkName: "Home", path: "/", isActive: false},
    {linkName: "About", path: "/about", isActive: false},
    {linkName: "Marketplace", path: "/marketplace", isActive: false},
    {linkName: "Reviews", path: "/reviews", isActive: false},
    {linkName: "FAQs", path: "/faq", isActive: false}
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white fixed w-full top-0 left-0 right-0">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
            <Link to={'/'} className='text-3xl font-rubik font-bold text-emerald-700'>Geekers</Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3BottomRightIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
            {navLinks.map((data, index) => {
                const { linkName, path, isActive } = data;
                return (
                    <Link to={path} key={index} className='font-rubik text-md duration-700 text-gray-800 hover:text-emerald-700'>
                        {linkName}
                    </Link>
                )
            })}            
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:gap-3 lg:justify-end">
            <Link to={'/login'} className='no-underline'>
                <Button
                    buttonText={'Log in'}
                    outline={true}
                />
            </Link>

            <Link to={'/signup'} className='no-underline'>
                <Button
                    buttonText={'Sign up'}
                    outline={false}
                />
            </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to={'/'} className='text-3xl font-rubik font-bold text-emerald-700'>Geekers</Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navLinks.map((data, index) => {
                    const { linkName, path, isActive } = data;
                    return (
                        <Link to={path} key={index} className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                            {linkName}
                        </Link>
                    )
                })}
              </div>
              <div className="py-6">
                <div className="flex gap-3">
                    <Link to={'/login'} className='no-underline'>
                        <Button
                            buttonText={'Log in'}
                            outline={true}
                        />
                    </Link>

                    <Link to={'/signup'} className='no-underline'>
                        <Button
                            buttonText={'Sign up'}
                            outline={false}
                        />
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
