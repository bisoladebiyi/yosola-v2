import Link from 'next/link'
import React from 'react'
import { INavbar } from '../../utils/interfaces'
import ApplicationLogo from '../ApplicationLogo'

const Navbar:React.FC<INavbar> = ({ activePage }) => {
  return (
    <div className='flex bg-white fixed w-full justify-between items-center px-24 py-6 z-50'>
        <ApplicationLogo className='w-9' />
        <ul className='flex justify-between items-center uppercase text-xl space-x-8 font-medium'>
        <Link href={"/"}><li className={`cursor-pointer hover:text-primary transition-colors ${activePage === "home" ? "text-primary" : "text-dark "}`}>home</li></Link>
            <Link href={"/#works"}><li className={`cursor-pointer hover:text-primary transition-colors ${activePage === "work" ? "text-primary" : "text-dark "}`}>work</li></Link>
            <Link href={"/about"}><li className={`cursor-pointer hover:text-primary transition-colors ${activePage === "about" ? "text-primary" : "text-dark "}`}>about</li></Link>
        </ul>
    </div>
  )
}

export default Navbar