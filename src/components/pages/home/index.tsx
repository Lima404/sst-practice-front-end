//import { useState } from 'react'
import './styles.css'
import Navbar from '../../layout/navbar'
import AboutUs from '../../home/aboutUs'
import OurServices from '../../home/ourServices/index'
import Soluctions from '../../home/soluctions'
import Flyer from '../../home/flyer'

function Home() {

  return (
    <header>
      <Navbar />
      <AboutUs />
      <OurServices />
      <Soluctions />
      <Flyer />
    </header>
  )
}

export default Home
