//import { useState } from 'react'
import './styles.css'
import Navbar from '../../layout/navbar'
import AboutUs from '../../home/aboutUs'
import OurServices from '../../home/ourServices/index'
import Soluctions from '../../home/Soluctions'
import Flyer from '../../home/Flyer'
import Contact from '../../home/Contact'
import Footer from '../../layout/Footer'

function Home() {

  return (
    <header>
      <Navbar />
      <AboutUs />
      <OurServices />
      <Soluctions />
      <Flyer />
      <Contact />
      <Footer />
    </header>
  )
}

export default Home
