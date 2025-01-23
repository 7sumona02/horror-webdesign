'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Make sure to import Swiper styles
import styles from './Hero.module.css'; // Assuming you're using CSS modules

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    // GSAP animations
    gsap.from("#leftside", {
      scrollTrigger: {
        scrub: true,
      },
      x: -100,
    });

    gsap.from("#rightside", {
      scrollTrigger: {
        scrub: true,
      },
      x: 100,
    });

    gsap.from("#leftpumpkin", {
      scrollTrigger: {
        scrub: true,
      },
      x: -150,
    });

    gsap.from("#rightpumpkin", {
      scrollTrigger: {
        scrub: true,
      },
      x: 150,
    });

    // Initialize Swiper
    const swiper = new Swiper(".swiper", {
      speed: 700,
      enabled: true,
      parallax: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    return () => {
      // Cleanup on unmount
      if (swiper) swiper.destroy();
    };
  }, []);

  return (
    <div>
      <section className={styles.parallax}>
          <h3 id="title" className='text-9xl'>CBS</h3>
          <h2 id="title" className='text-9xl'>CodeFest (1.0)</h2>
        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9648a7a2-03fe-4b48-b7ab-195ec34ac6a6" id="leftside" alt="halloween" />
        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5c125b01-3bda-46ed-87bf-f64a9cc39d9b" id="rightside" alt="halloween" />
        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/8102d1ed-0b60-40b6-a38a-75600c1c9c75" id="moon" alt="halloween" />
        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5c7a5d00-501e-4f2b-b31a-0d0e2dac47e5" id="bottom" alt="halloween" />
        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b8c09600-d3c2-4eab-a3e1-4f9a75d14331" id="leftpumpkin" alt="halloween" />
        <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/dc895daa-7d0c-4b65-946c-36faecc1d78e" id="rightpumpkin" alt="halloween" />
      </section>

      <section className={styles.blog}>
        <h3>Activities</h3>

        <div style={{ '--swiper-pagination-color': '#fff' }} className="swiper">
          <div className={styles.parallaxBg} data-swiper-parallax="-23%"></div>
          <div className="swiper-wrapper">
            {/* Repeat this structure for each activity */}
            {activities.map((activity, index) => (
              <div className="swiper-slide" key={index}>
                <div className={styles.content}>
                  <div className={styles.title} data-content={activity.title} data-swiper-parallax="-500">
                    {activity.title}
                  </div>
                  <div className={styles.text} data-swiper-parallax="-300" data-swiper-parallax-opacity="0">
                    <p>{activity.description}</p>
                  </div>
                </div>
                <div className={styles.image} data-swiper-parallax="-200">
                  <img src={activity.image} alt="" />
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>

        <p>
          Join us for a scary night of Halloween! Ravenwood Manor, a historic and scary mansion, will
          open its doors for an unforgettable night of thrills and chills.
        </p>
        <button className={styles.btn}>
          <span>Buy Ticket</span>
        </button>
      </section>
    </div>
  );
};

// Sample activities data
const activities = [
  {
    title: "Ghastly Ghost Tours",
    description:
      "Explore the dark history of Ravenwood Manor with guided tours through its haunted halls. Who knows what you might encounter in the shadowy corners?",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/943f5f64-3718-4d72-b4d0-d9f5a2b8af8e",
  },
  // Add other activities here...
];

export default Hero;
