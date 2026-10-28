import { useEffect, useRef, useState } from 'react';

// Check reduced motion preference
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Shared animation config — every scroll reveal on the site uses these values
export const REVEAL = {
  duration: '800ms',
  ease: 'cubic-bezier(0.22, 1, 0.36, 1)', // same curve as --ease-out-soft in index.css
  distance: '16px',
  stagger: 60, // ms between items in a list
};

/**
 * useInViewOnce — true from the first time the element enters the viewport, and stays true.
 * Content never hides again once seen, so scrolling back up doesn't replay anything.
 */
export function useInViewOnce(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        obs.disconnect();
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

// Fade + rise, optionally delayed (ms)
export function revealStyle(visible, delayMs = 0) {
  if (prefersReducedMotion()) return { opacity: 1 };
  const t = `${REVEAL.duration} ${REVEAL.ease} ${delayMs}ms`;
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : `translateY(${REVEAL.distance})`,
    transition: `opacity ${t}, transform ${t}`,
  };
}

/** useReveal — a single block that fades up once when it first enters the viewport */
export function useReveal() {
  const [ref, visible] = useInViewOnce(0.12);
  return [ref, revealStyle(visible)];
}

/**
 * useRevealStagger — one item of a list; each item starts REVEAL.stagger ms after the previous
 * index: position in the list
 */
export function useRevealStagger(index = 0) {
  const [ref, visible] = useInViewOnce(0.1);
  return [ref, revealStyle(visible, index * REVEAL.stagger)];
}
