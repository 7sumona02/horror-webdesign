'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import styles from './Hero.module.css';
import localFont from 'next/font/local';
import Footer from './Footer';

const myFont = localFont({src: 'CreepsterRegular.ttf' })

const tabs = [
  {
    title: 'How do UI components improve UX?',
    description:
      'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
    imageUrl:
      'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
  },
  {
    title: 'Common UI component design challenges?',
    description:
      'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
    imageUrl:
      'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
  },
  {
    title: 'Ensuring UI component responsiveness?',
    description:
      '     Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
    imageUrl:
      'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  },
];

function FAQ() {
  const [activeFAQ, setActiveFAQ] = useState(0);
  const [activeItem, setActiveItem] = useState(tabs[0]);

  const handleClick = async (FAQ) => {
    setActiveFAQ(activeFAQ === FAQ ? null : FAQ);
    const newActiveItem = tabs.find((_, i) => i === FAQ);
    setActiveItem(newActiveItem);
  };

  return (
    <div className='relative pb-20' id='faq'>
      <div className='container mx-auto pt-2 flex justify-center flex-col items-center px-60'>
        <section className={`pt-10 ${styles.problem}`}>
            <h3>FAQ</h3>
        </section>
        <div className='h-fit border-2 p-2 dark:bg-[#160c1f] bg-[#F2F2F2]'>
          {tabs.map((tab, FAQ) => (
            <motion.div
              key={FAQ}
              className={`overflow-hidden ${
                FAQ !== tabs.length - 1 ? 'border-b' : ''
              }`}
              onClick={() => handleClick(FAQ)}
            >
              <button
                className={`p-3 px-2 w-full cursor-pointer sm:text-base text-xs items-center transition-all font-semibold dark:text-white text-black   flex gap-2 
               `}
              >
                <Plus
                  className={`${
                    activeFAQ === FAQ ? 'rotate-45' : 'rotate-0 '
                  } transition-transform ease-in-out w-5 h-5 text-[#ff7940]`}
                />
                {tab.title}
              </button>
              <AnimatePresence mode='sync'>
                {activeFAQ === FAQ && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      delay: 0.14,
                    }}
                  >
                    <p
                      className={`dark:text-white text-black p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]`}
                    >
                      {tab.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <div className='absolute top-[60vh] bg-[#160c1f] w-screen'>
        <Footer />
      </div>
    </div>
  );
}

export default FAQ;

