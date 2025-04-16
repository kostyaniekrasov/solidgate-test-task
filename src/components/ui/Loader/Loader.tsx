import { motion } from 'framer-motion';

const Loader = () => (
  <motion.svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="rgba(255, 255, 255, 0.2)"
      strokeWidth="3"
      fill="none"
    />
    <motion.circle
      cx="12"
      cy="12"
      r="10"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      strokeDasharray="15 50"
      strokeDashoffset="0"
    />
  </motion.svg>
);

export default Loader;
