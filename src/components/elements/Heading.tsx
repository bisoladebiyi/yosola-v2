import React from 'react'
import { IHeading } from '../../../utils/interfaces'

const Heading:React.FC<IHeading> = ({ text, variant, color }) => {
  return (
    <div className='text-center'>
        <p className={`${color === "light" ? "text-light" : "text-dark"} ${variant === "large" ? "text-5xl" : "text-4xl"} font-semibold headingStyle relative inline-block`}>{text}</p>
    </div>
  )
}

export default Heading