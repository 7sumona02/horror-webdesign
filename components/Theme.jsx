'use client'
import localFont from 'next/font/local'
import React from 'react'
import styles from './Hero.module.css';
import { Event } from './Event';

const myFont = localFont({src: 'CreepsterRegular.ttf' })

const Theme = () => {
  return (
    <div className="relative pb-28" id='events'>
        <section className={`pt-24 ${styles.problem}`}>
            <h3>EVENTS</h3>
        </section>
        
            {/* <div className='flex justify-center'>
                <div className='grid grid-cols-3 gap-6 mt-5'>
                <FlipCard 
                title="Health" 
                redirectUrl="https://www.example.com/health" // Specify the redirect URL here
                />
                <FlipCard 
                title="AI/ML" 
                redirectUrl="https://www.example.com/health" // Specify the redirect URL here
                />
                <FlipCard 
                title="WebDev" 
                redirectUrl="https://www.example.com/health" // Specify the redirect URL here
                />
                <FlipCard 
                title="Health" 
                redirectUrl="https://www.example.com/health" // Specify the redirect URL here
                />
                <FlipCard 
                title="Health" 
                redirectUrl="https://www.example.com/health" // Specify the redirect URL here
                />
                <FlipCard 
                title="Health" 
                redirectUrl="https://www.example.com/health" // Specify the redirect URL here
                />
                </div>
            </div> */}
            <Event />
        </div>
  )
}

export default Theme