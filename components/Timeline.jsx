"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import localFont from 'next/font/local';
import styles from './Hero.module.css';

const myFont = localFont({ src: 'CreepsterRegular.ttf' });

const events = [
  {
    date: "15th Jan 2025",
    title: "Hackathon Registration Opens",
    description: "Participants can start registering for the upcoming hackathon.",
  },
  {
    date: "30th Jan 2025",
    title: "Hackathon Registration Closes",
    description: "Final call for participants to register and form teams.",
  },
  {
    date: "1st Feb 2025",
    title: "Hackathon Kickoff",
    description: "The hackathon begins with a live opening ceremony and team presentations.",
  },
  {
    date: "2nd Feb 2025",
    title: "Midway Checkpoint",
    description: "Teams present their progress and receive feedback from mentors.",
  },
  {
    date: "3rd Feb 2025",
    title: "Final Submissions",
    description: "Teams submit their projects by the deadline.",
  },
  {
    date: "4th Feb 2025",
    title: "Judging and Awards Ceremony",
    description: "Winners are announced, and prizes are awarded to top projects.",
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
        <h3>Hackathon Timeline</h3>
      </section>
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
        <img src='/fs.svg' className="w-14 h-14 z-10" />
      </div>
      <div className="p-4 rounded shadow-md flex-1">
        <div className="text-sm text-zinc-400 mb-1">{event.date}</div>
        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
        <p className="text-zinc-400">{event.description}</p>
      </div>
    </motion.div>
  );
}
