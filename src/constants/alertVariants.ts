const alertVariants = {
  initial: { opacity: 0, x: 100, y: 0 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

export default alertVariants;
