import React from 'react'
import { ILayout } from '../../utils/interfaces';
import Navbar from './Navbar';

const Layout:React.FC<ILayout> = ({ activePage, children }) => {
  return (
    <div>
        <Navbar activePage={activePage} />
        {children}
    </div>
  )
}

export default Layout