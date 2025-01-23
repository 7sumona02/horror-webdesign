import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Theme from '@/components/Theme'
import React from 'react'

const page = () => {
  return (
    <div className='select-none'>
      {/* <Footprint /> */}
      
      <Nav />
      <Hero />
      <Theme />
      {/* <Timeline /> */}
    </div>
  )
}

export default page