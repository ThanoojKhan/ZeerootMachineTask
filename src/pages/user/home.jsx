import React from 'react'
import Navbar from '../../components/navbar'
import Blocks from '../../components/homePage/blocks'
import Features from '../../components/homePage/features'
import Hero from '../../components/homePage/hero'
import Newsletter from '../../components/homePage/newsletter'
import Testimonials from '../../components/homePage/testimonials'

function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Blocks/>
      <Testimonials/>
      <Features/>
      <Newsletter/>
    </>
  )
}

export default Home