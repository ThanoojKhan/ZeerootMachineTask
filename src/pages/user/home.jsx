import React from 'react'
import Navbar from '../../components/user/navbar'
import Blocks from '../../components/homePage/blocks'
import Features from '../../components/homePage/features'
import Hero from '../../components/homePage/hero'
import Newsletter from '../../components/homePage/newsletter'

function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Blocks/>
      <Features/>
      <Newsletter/>
    </>
  )
}

export default Home