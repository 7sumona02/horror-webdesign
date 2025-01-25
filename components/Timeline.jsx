"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import localFont from 'next/font/local'
import styles from './Hero.module.css';

const myFont = localFont({src: 'CreepsterRegular.ttf' })

const events = [
  {
    date: "2020",
    title: "Founded Company",
    description: "Our journey began with a simple idea and a lot of passion.",
  },
  {
    date: "2021",
    title: "Expanded Team",
    description: "We grew from 5 to 25 employees, expanding our capabilities.",
  },
  {
    date: "2022",
    title: "First Major Product Launch",
    description: "Our flagship product hit the market, receiving rave reviews.",
  },
  {
    date: "2023",
    title: "International Expansion",
    description: "We opened offices in London, Tokyo, and Sydney.",
  },
  {
    date: "2024",
    title: "Reached 1 Million Users",
    description: "A milestone achievement in our growth journey.",
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={ref} id='timeline' className="relative w-full max-w-2xl mx-auto mb-40">
        <section className={`pt-32 ${styles.problem}`}>
            <h3>Timeline</h3>
        </section>
      {/* <motion.div 
        className="absolute left-9 top-0 bottom-0 w-0.5 bg-gray-200" 
        style={{ scaleY: scrollYProgress }} 
      /> */}
      {events.map((event, index) => (
        <TimelineItem key={index} event={event} />
      ))}
    </div>
  );
}

function TimelineItem({ event }) {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-50, 0, 0]);

  return (
    <motion.div 
      ref={itemRef} 
      style={{ opacity, scale, x }} 
      className="mb-8 flex items-center"
    >
      <div className="flex flex-col items-center mr-4">
        <img src='/fs.svg' className="w-20 h-20 z-10" />
      </div>
      <div className="p-4 rounded shadow-md flex-1">
        <div className="text-sm text-zinc-400 mb-1">{event.date}</div>
        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
        <p className="text-zinc-400">{event.description}</p>
      </div>
    </motion.div>
  );
}
