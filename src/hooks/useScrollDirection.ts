import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      if (currentScroll <= 0) {
        setVisible(true);
        return;
      }

      if (Math.abs(currentScroll - prevScroll) < 10) {
        return;
      }

      setVisible(currentScroll < prevScroll);
      setPrevScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScroll]);

  return visible;
}