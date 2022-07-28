import React from 'react'
import Heading from './elements/Heading'

const Footer = () => {
  return (
    <div className='mt-28'>
        <Heading text="Let's talk!" variant='large' align='center' />
        <ul className='flex text-dark text-3xl justify-center space-x-7 capitalize font-medium mt-14'>
            <li>email</li>
            <li>linkedIn</li>
            <li>behance</li>
            <li>twitter</li>
            <li>resume</li>
        </ul>
        <p className='text-center mt-20 mb-16 text-base font-medium'>Copyright &copy; 2022 Adetimilehin Adeyosola. All rights reserved</p>
    </div>
  )
}

export default Footer