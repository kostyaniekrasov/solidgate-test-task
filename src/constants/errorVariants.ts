const errorVariants = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

export default errorVariants;
