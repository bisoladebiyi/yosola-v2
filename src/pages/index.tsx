import type { NextPage } from 'next'
import AboutFooter from '../components/AboutFooter'
import DesignProcess from '../components/DesignProcess'
import HeroSection from '../components/HeroSection'
import Layout from '../components/Layout'
import Summary from '../components/Summary'
import Works from '../components/Works'


const Home: NextPage = () => {
  return (
    <Layout activePage='home'>
      <>
      <HeroSection />
      <div className='pt-28 px-7 sm:px-24 lg:px-28'>
       <Summary />
       <Works />
     </div>
     <DesignProcess />
     <AboutFooter />
      </>
     
    </Layout>
  )
}

export default Home
