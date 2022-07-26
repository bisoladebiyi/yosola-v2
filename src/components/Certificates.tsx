import Image from 'next/image'
import React from 'react'
import { ICertificates } from '../utils/interfaces'
import cousera from '../../public/images/Coursera Certificate.png'
import clarats from '../../public/images/Clarats Certificate.png'
import google from '../../public/images/Google Certificate.png'
import udemy from '../../public/images/Udemy Certificate.png'

const certArray: ICertificates[] = [
    {
        img: cousera,
        text: 'Google UX Design'
    },
    {
        img: clarats,
        text: 'Fundamentals of Graphic Design'
    },
    {
        img: google,
        text: 'Fundamentals of Digital Marketing'
    },
    {
        img: udemy,
        text: 'Proofread like a pro'
    }
]
const Certificates = () => {
  return (
    <div className='px-28 mt-24'>
        <h2 className='uppercase font-semibold text-2xl'>Certificates</h2>
        <div className='grid grid-cols-4'>
            {certArray.map(({text, img}) => (
                <div key={text}>
                    <Image src={img} alt={text} />
                    <p className='text-center font-medium text-lg'>{text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Certificates