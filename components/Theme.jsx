'use client'
import localFont from 'next/font/local'
import React from 'react'
import styles from './Hero.module.css';
import { User } from 'lucide-react';

const myFont = localFont({src: 'CreepsterRegular.ttf' })

const Theme = () => {
  return (
        <section className={styles.blog}>
            <h3>THEMES</h3>
            <div className='grid grid-cols-3 gap-6 mt-5'>
                <div className='bg-[#ff7940]/90 p-10 border-2 flex flex-col gap-3 items-center justify-center w-[20vw] h-[24vh]'>
                    <div><User size={30} color='black' strokeWidth={3} /></div>
                    <div className='text-2xl font-semibold text-black'>Health</div>
                </div>
                <div className='bg-[#ff7940]/90 p-10 border-2 flex flex-col gap-3 items-center justify-center w-[20vw] h-[24vh]'>
                    <div><User size={30} color='black' strokeWidth={3} /></div>
                    <div className='text-2xl font-semibold text-black'>Education</div>
                </div>
                <div className='bg-[#ff7940]/90 p-10 border-2 flex flex-col gap-3 items-center justify-center w-[20vw] h-[24vh]'>
                    <div><User size={30} color='black' strokeWidth={3} /></div>
                    <div className='text-2xl font-semibold text-black'>Finance</div>
                </div>
                <div className='bg-[#ff7940]/90 p-10 border-2 flex flex-col gap-3 items-center justify-center w-[20vw] h-[24vh]'>
                    <div><User size={30} color='black' strokeWidth={3} /></div>
                    <div className='text-2xl font-semibold text-black'>Web3</div>
                </div>
                <div className='bg-[#ff7940]/90 p-10 border-2 flex flex-col gap-3 items-center justify-center w-[20vw] h-[24vh]'>
                    <div><User size={30} color='black' strokeWidth={3} /></div>
                    <div className='text-2xl font-semibold text-black'>IOT</div>
                </div>
                <div className='bg-[#ff7940]/90 p-10 border-2 flex flex-col gap-3 items-center justify-center w-[20vw] h-[24vh]'>
                    <div><User size={30} color='black' strokeWidth={3} /></div>
                    <div className='text-2xl font-semibold text-black'>Innovation</div>
                </div>
            </div>
        </section>
  )
}

export default Theme