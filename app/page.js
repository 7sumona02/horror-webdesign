'use client'
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
      {/* Mobile message */}
      <div className='md:hidden min-h-screen flex items-center justify-center p-4 text-center'>
        <div className='text-white'>
          <h1 className='text-2xl font-bold mb-2'>Desktop Only</h1>
          <p>This website is currently optimized for desktop viewing only. Please visit us on a larger screen for the best experience.</p>
        </div>
      </div>

      {/* Desktop content */}
      <div className='hidden md:block'>
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
    </div>
  )
}

export default page