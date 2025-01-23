'use client'
import { motion, useScroll, useTransform } from 'framer-motion';

const Timeline = () => {
    const { scrollYProgress } = useScroll();

    // Create multiple step transformations
    const stepOpacities = [
        useTransform(scrollYProgress, [0, 0.25], [0, 1]),
        useTransform(scrollYProgress, [0.25, 0.5], [0, 1]),
        useTransform(scrollYProgress, [0.5, 0.75], [0, 1]),
        useTransform(scrollYProgress, [0.75, 1], [0, 1]),
        useTransform(scrollYProgress, [0.85, 1], [0, 1]),
        useTransform(scrollYProgress, [0.9, 1], [0, 1]),
        useTransform(scrollYProgress, [0.95, 1], [0, 1]),
    ];

    return (
        <div style={{ 
            position: 'absolute', 
            left: '60px',
            height: '600vh', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }} className='z-[100]'>
            {stepOpacities.map((opacity, index) => (
                <motion.div
                    key={index}
                    style={{
                        position: 'fixed',
                        top: `${10 + index * 15}%`, // Adjust spacing between steps
                        width: '60px', 
                        opacity: opacity
                    }}
                >
                    <img 
                        src='/fs.svg' 
                        alt={`Step ${index + 1}`} 
                        className='w-full'
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default Timeline;
