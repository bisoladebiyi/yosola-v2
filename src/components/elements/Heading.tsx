import React from 'react'
import { IHeading } from '../../utils/interfaces'

const Heading:React.FC<IHeading> = ({ text, variant, color, align }) => {
  return (
    <div className={`text-${align}`}>
        <p className={`${color === "light" ? "text-light" : "text-dark"} ${variant === "large" ? "text-5xl" : variant === "small" ? "text-3xl" : "text-4xl"} font-semibold headingStyle relative inline-block`}>{text}</p>
    </div>
  )
}

export default Heading