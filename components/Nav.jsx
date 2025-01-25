'use client';
import { motion } from 'framer-motion';
import { useState } from "react";
import Drawer from "./edil-ozi/drawer";
import localFont from 'next/font/local'

const myFont = localFont({src: 'CreepsterRegular.ttf' })

const items = ["home", "about", "themes", "problem", "timeline", "sponsors", "prizes", "faq"];
const anchor = "left"; 

const Nav = () => {
    const floatAnimation = {
      y: [0, -10, 0], 
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity, 
      },
    };
  
    const rotateAnimation = {
      rotate: [0, 10, -10, 0], 
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    };

  const [drawer, setDrawer] = useState({ open: false, anchor });

  const toggleDrawer = (value) => {
    setDrawer({ ...drawer, open: value });
  };

  return (
    <>
      <div className="">
        <motion.img 
          src='/nav.svg'
          onClick={() => setDrawer({ anchor, open: true })} // Use only 'right'
          className="z-[100] first-letter:uppercase fixed size-16 top-8 right-8"
          alt="Open drawer"
          variants={{ ...floatAnimation, ...rotateAnimation }}
        animate={{ ...floatAnimation, ...rotateAnimation }}
        />
      </div>
      <Drawer
        open={drawer.open}
        setOpen={toggleDrawer}
        anchor={drawer.anchor}
      >
       <ul className="h-full p-4 bg-zinc-100 shadow-md shadow-zinc-400 dark:bg-zinc-900 dark:shadow-zinc-950">
  {items.map((item) => (
    <a key={item} href={`#${item}`}>
      <li className={`cursor-pointer p-4 text-2xl text-[#ec4e39] uppercase ${myFont.className}`}>
        {item}
      </li>
    </a>
  ))}
</ul>

      </Drawer>
    </>
  );
};

export default Nav;
