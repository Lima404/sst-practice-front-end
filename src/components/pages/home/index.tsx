//import { useState } from 'react'
import './styles.css'
import Navbar from '../../layout/navbar'
import AboutUs from '../../home/aboutUs'
import OurServices from '../../home/ourServices/index'
import Soluctions from '../../home/soluctions'

function Home() {

  return (
    <header>
      <Navbar />
      <AboutUs />
      <OurServices />
      <Soluctions />
    </header>
  )
}

export default Home
