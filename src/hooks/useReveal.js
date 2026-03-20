import { useEffect, useRef, useState } from 'react';

// Detect mobile viewport
const isMobile = () => window.innerWidth < 768;

// Shared animation config — change here, changes everywhere
export const REVEAL = {
  duration: '1.3s',
  ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
  distance: '24px',
  // Left side delay, right side delay
  leftDelay: '0s',
  rightDelay: '0.2s',
};

/**
 * useReveal — fires every time the element enters the viewport
 * side: 'left' | 'right' | 'full' (no left/right distinction)
 */
export function useReveal(side = 'full') {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delay = side === 'right'
    ? REVEAL.rightDelay
    : side === 'left'
    ? REVEAL.leftDelay
    : '0s';

  const style = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : `translateY(${REVEAL.distance})`,
    transition: visible
      ? `opacity ${REVEAL.duration} ${REVEAL.ease} ${delay}, transform ${REVEAL.duration} ${REVEAL.ease} ${delay}`
      : 'none', // instant reset so it's ready to replay cleanly
  };

  return [ref, style];
}

/**
 * useRevealStagger — for lists of items, each gets an incremental delay
 * side: 'left' | 'right' | 'full'
 * index: position in the list
 * stagger: ms between each item (default 120ms on desktop, 50ms on mobile)
 */
export function useRevealStagger(side = 'full', index = 0, stagger = 120) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Reduce stagger dramatically on mobile for faster animations
  const actualStagger = isMobile() ? Math.min(stagger * 0.4, 50) : stagger;
  const baseDelay = side === 'right' ? (isMobile() ? 100 : 200) : 0;
  const totalDelay = `${(baseDelay + index * actualStagger) / 1000}s`;

  const style = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : `translateY(${REVEAL.distance})`,
    transition: visible
      ? `opacity ${REVEAL.duration} ${REVEAL.ease} ${totalDelay}, transform ${REVEAL.duration} ${REVEAL.ease} ${totalDelay}`
      : 'none',
  };

  return [ref, style];
}
