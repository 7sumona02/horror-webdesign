import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import PS from '@/components/PS'
import About from '@/components/About'
import Theme from '@/components/Theme'
import React from 'react'
import FAQ from '@/components/FAQ'
import Sponsor from '@/components/Sponsors'
import Timeline from '@/components/Timeline'
import ACM from '@/components/ACM'
import Team from '@/components/Team'
import Countdown from '@/components/Countdown'

const page = () => {
  return (
    <div className='select-none bg-[#160c1f]'>
      
      <Nav />
      <Hero />
      <Countdown />
      <About />
      <ACM />
      <Theme />
      <PS />
      <Timeline />
      <Team />
      <Sponsor />
      <FAQ />
    </div>
  )
}

export default page