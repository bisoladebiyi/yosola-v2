import Link from 'next/link'
import React from 'react'
import { ILink } from '../../utils/interfaces'

const LinkComponent:React.FC<ILink> = ({ href, children}) => {
  return (
    <Link href={href}>
    {/* <a href={href} suppressHydrationWarning={true}> */}
        {children}
    {/* </a> */}
    </Link>
  )
}

export default LinkComponent