'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [showMessage, setShowMessage] = useState(false); // State to control message visibility

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  };

  const rotateAnimation = {
    rotate: [0, 6, -6, 0],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  };

  // Function to toggle the message bubble
  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div id='footer' className='bg-[#160c1f] flex relative'>
      <motion.img 
        src='/pumpkin.jpg'
        variants={{ ...floatAnimation, ...rotateAnimation }}
        animate={{ ...floatAnimation, ...rotateAnimation }} 
        className='size-72 cursor-pointer' 
        onClick={handleClick} // Add click handler
      />
      
      {/* Message Bubble */}
      {showMessage && (
        <motion.div 
          className="message-bubble absolute left-[14vw] top-10 p-4 pt-2" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -20 }} 
          transition={{ duration: 0.3 }}
        >
          🎃 Happy Halloween! Enjoy the spooky season! 🎃
        </motion.div>
      )}
    </div>
  );
}

export default Footer;
