import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import About from '@/components/Sponsors'
import Theme from '@/components/Theme'
import React from 'react'

const page = () => {
  return (
    <div className='select-none'>
      {/* <Footprint /> */}
      
      <Nav />
      <Hero />
      <About />
      <Theme />
      {/* <Timeline /> */}
    </div>
  )
}

export default page