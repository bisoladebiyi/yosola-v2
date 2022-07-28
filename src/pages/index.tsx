import type { NextPage } from 'next'
import DesignProcess from '../components/DesignProcess'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Layout from '../components/Layout'
import Summary from '../components/Summary'
import Works from '../components/Works'


const Home: NextPage = () => {
  return (
    <Layout activePage='home'>
      <>
      <HeroSection />
      <div className='pt-28 px-28'>
       <Summary />
       <Works />
     </div>
     <DesignProcess />
     <Footer />
      </>
     
    </Layout>
  )
}

export default Home
