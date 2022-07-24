import React from 'react'
import { IButton } from '../../../utils/interfaces'

const Button:React.FC<IButton> = ({ text, variant, align }) => {
  return (
    <div className={`flex ${align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start"}`}>
        <button className={`${variant === 'outline' ? "bg-none text-black border-2 border-primary hover:bg-primary hover:text-white" : "bg-primary text-white"} px-3 py-2 text-lg rounded-md font-semibold transition-colors`}>{text}</button>
    </div>
   
  )
}

export default Button