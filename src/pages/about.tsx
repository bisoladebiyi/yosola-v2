import React, { useEffect, useState } from 'react'
import About from '../components/About'
import Certificates from '../components/Certificates'
import Layout from '../components/Layout'
import Skills from '../components/Skills'
import { useInView } from 'react-intersection-observer';
import AboutFooter from '../components/AboutFooter'

const AboutPage = () => {
  const { ref, inView} = useInView()
  const [ animate, setAnimate ] = useState<boolean>(false)
  useEffect(()=> {
    if(inView){
      setAnimate(true)
    }
  },[inView])
  return (
    <Layout activePage="about">
      <>
      <About />
      <Certificates />
      <Skills skillsRef={ref} animate={animate} />
      <AboutFooter />
      </>
    </Layout>  
  )
}

export default AboutPage