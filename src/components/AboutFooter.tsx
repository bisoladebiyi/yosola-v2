import React from 'react'
import Heading from './elements/Heading'

const AboutFooter = () => {
  return (
    <div className='bg-darker pt-10 px-7 sm:px-24 lg:px-40 pb-14 text-light'>
        <div className='md:flex justify-between'>
        <div className='md:w-2/5'>
            <Heading color='light' text='Get in touch' variant='small' />
            <p className='mt-10 font-medium'>
            Want to get in touch for opportunities or want to talk about what I could do for you?<br /><br />Shoot an email to <a className='underline' href='mailto:adeyosola7@gmail.com'>adeyosola7@gmail.com</a>
            </p>
        </div>
        <div className='mt-10 md:mt-0'>
        <Heading color='light' text="Let's connect" variant='small' />
        <div className='flex mt-10 font-medium text-lg'>
            <ul className='space-y-3'>
                <li className='cursor-pointer'><a href='https://www.twitter.com/yosi_mite' target="_blank" rel="noreferrer">Twitter</a></li>
                <li className='cursor-pointer'><a href='https://www.instagram.com/yos_see' target="_blank" rel="noreferrer">Instagram</a></li>
                <li className='cursor-pointer'><a href='https://medium.com/@adeyosola7' target="_blank" rel="noreferrer">Medium</a></li>
            </ul>
            <ul className='space-y-3 ml-5'>
                <li className='cursor-pointer'><a href='https://www.linkedin.com/in/adetimilehin-adeyosola-234a14203' target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li className='cursor-pointer'><a href='https://www.behance.net/0581fd0a' target="_blank" rel="noreferrer">Behance</a></li>
                <li className='cursor-pointer'><a href='https://dribbble.com/yossee07' target="_blank" rel="noreferrer">Dribble</a></li>
            </ul>
        </div>
        </div>
        </div>
        <p className='text-center mt-20 text-xs sm:text-sm font-medium'>Copyright &copy; 2022 Adetimilehin Adeyosola. All rights reserved</p>

    </div>
  )
}

export default AboutFooter