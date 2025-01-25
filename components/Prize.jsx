'use client'
import localFont from 'next/font/local'
import React from 'react'
import styles from './Hero.module.css';
import PrizeCard from './PrizeCard';

const myFont = localFont({src: 'CreepsterRegular.ttf' })

const Prize = () => {
  const OPTIONS = { loop: true };
  return (
    <div className="relative pb-40" id='prizes'>
        <section className={`pt-24 ${styles.problem}`}>
            <h3>Prizes</h3>
        </section>
           <div className='grid grid-cols-3 gap-10 px-40'>
                <PrizeCard />
                <PrizeCard />
                <PrizeCard />
           </div>
        </div>
  )
}

export default Prize