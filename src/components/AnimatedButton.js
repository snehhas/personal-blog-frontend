import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedButton = () => {
  return (
    <Button
      component={motion.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      variant="contained"
      color="primary"
    >
      Click Me
    </Button>
  );
};

export default AnimatedButton;
