import Link from 'next/link'
import React from 'react'
import { INavbar } from '../../utils/interfaces'
import ApplicationLogo from '../ApplicationLogo'

const Navbar:React.FC<INavbar> = ({ activePage, setShowMobileMenu, showMobileMenu }) => {
  return (
    <div className='flex bg-white fixed w-full justify-between items-center px-7 sm:px-16 lg:px-28 py-3 sm:py-6 z-50'>
        <ApplicationLogo className='w-7 sm:w-9' />
        <ul className='hidden md:flex justify-between items-center uppercase text-xl space-x-8 font-medium'>
        <Link href={"/"}><li className={`cursor-pointer hover:text-primary transition-colors ${activePage === "home" ? "text-primary" : "text-dark "}`}>home</li></Link>
            <Link href={"/#works"}><li className={`cursor-pointer hover:text-primary transition-colors ${activePage === "work" ? "text-primary" : "text-dark "}`}>work</li></Link>
            <Link href={"/about"}><li className={`cursor-pointer hover:text-primary transition-colors ${activePage === "about" ? "text-primary" : "text-dark "}`}>about</li></Link>
        </ul>
        <div className='bg-primary p-1 rounded-md cursor-pointer md:hidden' onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <div style={{ transition: 'transform .25s ease-in-out'}} className={`grid grid-cols-2 gap-1 ${showMobileMenu ? '-rotate-45' : 'rotate-0'}`}>
          <div className='w-3 h-3 bg-light-purp rounded-sm'></div>
          <div className='w-3 h-3 bg-light-purp rounded-sm'></div>
          <div className='w-3 h-3 bg-light-purp rounded-sm'></div>
          <div className='w-3 h-3 bg-light-purp rounded-sm'></div>
        </div>
        </div>
    </div>
  )
}

export default Navbar