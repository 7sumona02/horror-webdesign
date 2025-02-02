'use client'
import localFont from 'next/font/local'
import React from 'react'
import styles from './Hero.module.css';
import { Sponsorcard } from './SponsorCard';

const myFont = localFont({src: 'CreepsterRegular.ttf' })

const Sponsor = () => {
  const OPTIONS = { loop: true };
  return (
    <div className="relative pb-40" id='sponsors'>
        <section className={`pt-24 ${styles.problem}`}>
            <h3>Sponsors</h3>
        </section>
           <div className='pt-6'>
                <Sponsorcard />
           </div>
        </div>
  )
}

export default Sponsor