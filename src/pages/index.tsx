import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Summary from '../components/Summary'
import Works from '../components/Works'


const Home: NextPage = () => {
  return (
    <Layout activePage='home'>
     <div className='pt-28 px-28'>
       <Summary />
       <Works />
     </div>
    </Layout>
  )
}

export default Home
