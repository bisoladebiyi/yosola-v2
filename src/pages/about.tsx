import React from 'react'
import About from '../components/About'
import Certificates from '../components/Certificates'
import Layout from '../components/Layout'
import Skills from '../components/Skills'

const AboutPage = () => {
  return (
    <Layout activePage="about">
      <>
      <About />
      <Certificates />
      <Skills />
      </>
    </Layout>  
  )
}

export default AboutPage