'use client'
import localFont from 'next/font/local'
import React from 'react'
import styles from './Hero.module.css';
import SponsorCard from './SponsorCard';

const myFont = localFont({src: 'CreepsterRegular.ttf' })

const Sponsor = () => {
  const OPTIONS = { loop: true };
  return (
    <div className="relative pb-40" id='Sponsors'>
        <section className={`pt-24 ${styles.problem}`}>
            <h3>Sponsors</h3>
        </section>
           <div className='grid grid-cols-3 gap-10 px-40'>
                <SponsorCard />
                <SponsorCard />
                <SponsorCard />
           </div>
        </div>
  )
}

export default Sponsor