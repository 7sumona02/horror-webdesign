'use client'
import localFont from 'next/font/local'
import React from 'react'
import styles from './Hero.module.css';
import TeamCard from './TeamCard';

const myFont = localFont({src: 'CreepsterRegular.ttf' })

const Team = () => {
  const OPTIONS = { loop: true };
  return (
    <div className="relative pb-40" id='team'>
        <section className={`pt-24 ${styles.problem}`}>
            <h3>Our Team</h3>
        </section>
           {/* <div className='grid grid-cols-3 gap-10 px-40'>
                <TeamCard />
                <TeamCard />
                <TeamCard />
           </div> */}
           <div>
            <TeamCard />
           </div>
        </div>
  )
}

export default Team