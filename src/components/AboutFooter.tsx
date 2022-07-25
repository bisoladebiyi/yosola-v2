import React from 'react'
import Heading from './elements/Heading'

const AboutFooter = () => {
  return (
    <div className='bg-darker pt-10 px-40 pb-14 text-light'>
        <div className='flex justify-between'>
        <div className='w-2/5'>
            <Heading color='light' text='Get in touch' variant='small' />
            <p className='mt-10 font-medium'>
            Want to get in touch for opportunities or want to talk about what I could do for you?<br /><br />Shoot an email to adeyosola7@gmail.com
            </p>
        </div>
        <div>
        <Heading color='light' text="Let's connect" variant='small' />
        <div className='flex mt-10 font-medium text-lg'>
            <ul className='space-y-3'>
                <li className='cursor-pointer'>Twitter</li>
                <li className='cursor-pointer'>Instagram</li>
                <li className='cursor-pointer'>Medium</li>
            </ul>
            <ul className='space-y-3 ml-5'>
                <li className='cursor-pointer'>LinkedIn</li>
                <li className='cursor-pointer'>Behance</li>
                <li className='cursor-pointer'>Dribble</li>
            </ul>
        </div>
        </div>
        </div>
        <p className='text-center mt-20 text-sm font-medium'>Copyright &copy; 2022 Adetimilehin Adeyosola. All rights reserved</p>

    </div>
  )
}

export default AboutFooter