
import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number | string;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export const CountUp = ({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '' 
}: CountUpProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number | null>(null);
  const endValue = typeof end === 'string' ? parseInt(end.replace(/\D/g, '')) : end;
  
  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;
    
    const updateCount = () => {
      const now = Date.now();
      const remaining = Math.max(endTime - now, 0);
      const progress = 1 - remaining / duration;
      
      // Easing function for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      setCount(Math.floor(easedProgress * endValue));
      
      if (now < endTime) {
        countRef.current = requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };
    
    countRef.current = requestAnimationFrame(updateCount);
    
    return () => {
      if (countRef.current !== null) {
        cancelAnimationFrame(countRef.current);
      }
    };
  }, [endValue, duration]);
  
  // Format output based on original string pattern if end is a string
  const formatOutput = () => {
    if (typeof end === 'string' && end.includes('+')) {
      return `${prefix}${count}${suffix}+`;
    }
    return `${prefix}${count}${suffix}`;
  };
  
  return <span>{formatOutput()}</span>;
};
