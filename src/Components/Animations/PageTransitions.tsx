import React, {useEffect, ReactNode} from 'react'
import { motion } from 'framer-motion'

const animations = {
  initial : {opacity: 0, y : '100%'},
  animate : {opacity: 1, y : '0%'},
  exit: {opacity: 0, y : '-100%'}
}

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({children}: PageTransitionProps) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      variants={animations} 
      initial="initial" 
      animate="animate" 
      exit="exit"
      transition={{ duration: 1}}>
      {children}
    </motion.div>
  )
}

export default PageTransition