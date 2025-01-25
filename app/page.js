import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import PS from '@/components/PS'
import About from '@/components/About'
import Theme from '@/components/Theme'
import React from 'react'
import Prize from '@/components/Prize'
import FAQ from '@/components/FAQ'
import Sponsor from '@/components/Sponsors'
import Timeline from '@/components/Timeline'

const page = () => {
  return (
    <div className='select-none bg-[#160c1f]'>
      
      <Nav />
      <Hero />
      <About />
      <Theme />
      <PS />
      <Timeline />
      <Prize />
      <Sponsor />
      <FAQ />
      <Footer />
    </div>
  )
}

export default page