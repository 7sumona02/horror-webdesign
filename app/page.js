import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import PS from '@/components/PS'
import About from '@/components/About'
import Theme from '@/components/Theme'
import React from 'react'
import Prize from '@/components/Prize'

const page = () => {
  return (
    <div className='select-none bg-[#160c1f]'>
      {/* <Footprint /> */}
      
      <Nav />
      <Hero />
      <About />
      <Theme />
      <PS />
      <Prize />
      <Footer />
      {/* <Timeline /> */}
    </div>
  )
}

export default page