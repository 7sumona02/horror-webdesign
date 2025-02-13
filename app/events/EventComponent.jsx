'use client'
import { motion } from 'framer-motion';
import Head from 'next/head';

const EventComponent = ({ title, description, date, time, location, dressCode, registerLink }) => {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/cover.jpg')] bg-cover bg-center opacity-50"></div>
      <Head>
        <motion.h1
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="text-6xl md:text-8xl font-creepster text-red-600 mb-4"
        >
          {title}
        </motion.h1>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/horror-bg.jpg')] bg-cover bg-center opacity-50"></div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-10 relative z-10"
      >
        <h1 className="font-creepster text-6xl md:text-8xl text-red-600 mb-4">{title}</h1>
        <p className="text-2xl text-gray-300 font-bold">{description}</p>
      </motion.div>

      {/* Event Details Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-black bg-opacity-75 p-8 rounded-lg shadow-2xl mb-10 w-full max-w-2xl relative z-10"
      >
        <h2 className="text-4xl font-creepster text-red-600 mb-6">Event Details</h2>
        <div className="space-y-4 text-lg text-gray-200">
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Dress Code:</strong> {dressCode}</p>
        </div>
      </motion.div>

      {/* Register Button Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mb-10 relative z-10"
      >
        <a href={registerLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-2xl transition duration-300 transform hover:scale-105">
            Register Now
          </button>
        </a>
      </motion.div>

      {/* Spooky Elements */}
      {/* Ghost Images */}
      <motion.img
        src="/ghost.svg"
        alt="Ghost"
        className="absolute top-20 left-10 w-20"
        animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.img
        src="/ghost.svg"
        alt="Ghost"
        className="absolute top-36 left-28 w-16"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-gray-400 text-lg relative z-10"
      >
        <p>Don&apos;t miss out on the scariest night of the year!</p>
      </motion.div>

      {/* Spooky Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-0"
      ></motion.div>
    </div>
  );
};

export default EventComponent;
