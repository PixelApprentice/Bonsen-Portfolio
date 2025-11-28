/**
 * Centralized animation variants and configurations
 * Keeps animations DRY and maintainable
 */

export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const FADE_IN_UP_DELAYED = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export const FADE_IN_LEFT = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: 0.9 },
};

export const SCALE_IN = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4 },
};

export const SLIDE_DOWN = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { duration: 0.6 },
};

export const STAGGER_CONTAINER = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.6,
    },
  },
};

export const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 100,
    },
  },
};

export const HOVER_SCALE = { scale: 1.05 };
export const TAP_SCALE = { scale: 0.95 };

export const VIEWPORT_ONCE = { once: true };
