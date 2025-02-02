'use client'
import { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const halloween = new Date(now.getFullYear(), 9, 31); // October is month 9 (0-indexed)
    if (now > halloween) {
      halloween.setFullYear(halloween.getFullYear() + 1); // Move to next year if Halloween has passed
    }

    const difference = halloween - now;
    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎃 Event Countdown 🎃</h1>
      <div style={styles.timer}>
        <div style={styles.timeUnit}>
          <span style={styles.timeValue}>{timeLeft.days}</span>
          <span style={styles.timeLabel}>Days</span>
        </div>
        <div style={styles.timeUnit}>
          <span style={styles.timeValue}>{timeLeft.hours}</span>
          <span style={styles.timeLabel}>Hours</span>
        </div>
        <div style={styles.timeUnit}>
          <span style={styles.timeValue}>{timeLeft.minutes}</span>
          <span style={styles.timeLabel}>Minutes</span>
        </div>
        <div style={styles.timeUnit}>
          <span style={styles.timeValue}>{timeLeft.seconds}</span>
          <span style={styles.timeLabel}>Seconds</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    color: '#ff8c42',
    padding: '2rem',
    borderRadius: '10px',
    fontFamily: '"Creepster", cursive',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  timer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  timeUnit: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  timeValue: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  timeLabel: {
    fontSize: '1.2rem',
    color: '#ccc',
  },
};

export default Countdown;