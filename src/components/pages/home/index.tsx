//import { useState } from 'react'
import './styles.css'
import Navbar from '../../layout/navbar'
import Hero1 from '../../home/Hero1'
import Hero2 from '../../home/Hero2'
// import System from '../../layout/System'

function Home() {

  return (
    <header>
      <Navbar />
      <Hero1 />
      <Hero2 />
      {/* <System /> */}
    </header>
  )
}

export default Home
