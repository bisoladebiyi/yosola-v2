import Link from 'next/link';
import React, { useState } from 'react'
import { ILayout } from '../../utils/interfaces';
import Navbar from './Navbar';

const Layout:React.FC<ILayout> = ({ activePage, children }) => {
  const [ showMobileMenu, setShowMobileMenu ] = useState<boolean>(false)
  return (
    <div>
        <Navbar showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} activePage={activePage} />
        {children}
        <ul style={{ transition: "top .3s ease-in-out"}} className={`fixed ${showMobileMenu ? "top-20" : "-top-44"} py-5 w-full bg-white flex flex-col justify-between items-center uppercase text-xl space-y-5 font-medium`}>
        <Link href={"/"}><li className={`cursor-pointer hover:text-primary transition-colors ${activePage === "home" ? "text-primary" : "text-dark "}`} onClick={() => setShowMobileMenu(false)}>home</li></Link>
            <Link href={"/#works"}><li className={`cursor-pointer hover:text-primary transition-colors ${activePage === "work" ? "text-primary" : "text-dark "}`} onClick={() => setShowMobileMenu(false)}>work</li></Link>
            <Link href={"/about"}><li className={`cursor-pointer hover:text-primary transition-colors ${activePage === "about" ? "text-primary" : "text-dark "}`} onClick={() => setShowMobileMenu(false)}>about</li></Link>
        </ul>
    </div>
  )
}

export default Layout