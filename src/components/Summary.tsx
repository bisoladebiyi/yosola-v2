import Link from 'next/link'
import React from 'react'
import Heading from './elements/Heading'

const Summary = () => {
  return (
    <div className='text-lg sm:text-xl md:text-2xl font-medium mb-20'>
        <Heading text="Who I am" align='center' />
        <p className='mt-10'>I am a UI/UX Designer based in Nigeria, I specialize in creating better experience for people. I use my curiosity, empathy and technical skills to solve design challenges. My goal as a uiux designer is to offer an effortless pleasing experience when people interact with my products.</p><br />
        <p className='text-center'>Intrigued right? <Link href={"/about"} passHref><span className='font-semibold underline cursor-pointer'>Learn more about me</span></Link></p>
    </div>
  )
}

export default Summary