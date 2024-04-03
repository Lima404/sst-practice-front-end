//import { useState } from 'react'
import './styles.css'
import Navbar from '../../layout/navbar'
import Hero1 from '../../layout/Hero1'
import Hero2 from '../../layout/Hero2'
import System from '../../layout/System'

function Home() {

  return (
    <header>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <System />
    </header>
  )
}

export default Home
