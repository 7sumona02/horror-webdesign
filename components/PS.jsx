'use client'
import localFont from 'next/font/local'
import React from 'react'
import styles from './Hero.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Carousel, { Slider,SliderContainer,
  SliderDotButton,
  SliderNextButton,
  SliderPrevButton, } from './carousel';

const myFont = localFont({src: 'CreepsterRegular.ttf' })

const PS = () => {
  const OPTIONS = { loop: true };
  return (
    <div className="relative pb-32" id='problem'>
        <section className={`pt-32 ${styles.problem}`}>
            <h3>Problem Statements</h3>
        </section>
           <div className=''>
           <Carousel options={OPTIONS} className='bg-[#160c1f]'>
        <SliderContainer>
          <Slider className="w-full">
            <div className="bg-blue-500 md:h-[500px] sm:h-full h-[300px] w-full"></div>
          </Slider>
          <Slider className="w-full">
            <div className="bg-green-500 md:h-[500px] sm:h-full h-[300px] w-full"></div>
          </Slider>
          <Slider className="w-full">
            <div className="bg-yellow-500 md:h-[500px] sm:h-full h-[300px] w-full"></div>
          </Slider>
          <Slider className="w-full">
            <div className="bg-red-500 md:h-[500px] sm:h-full h-[300px] w-full"></div>
          </Slider>
        </SliderContainer>
        <SliderPrevButton className="absolute top-[60%] p-2 border-2 rounded-full left-4 bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-sm text-primary disabled:opacity-20">
          <ChevronLeft className="w-8 h-8" />
        </SliderPrevButton>
        <SliderNextButton className="absolute right-4 p-2 border-2 rounded-full top-[60%] bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-sm text-primary disabled:opacity-20">
          <ChevronRight className="w-8 h-8" />
        </SliderNextButton>
        <div className="flex justify-center py-2">
          <SliderDotButton />
        </div>
      </Carousel>
           </div>
        </div>
  )
}

export default PS