import React, { useEffect } from 'react'
import { useAnimate, stagger } from 'framer-motion';

const useMenuAnimation = (open: boolean) => {
  const [scope, animate] = useAnimate();
  const staggerMenuItems = stagger(0.2, { startDelay: 0.15 });


  useEffect(() => {

    animate(
      "li",
      open
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: open ? staggerMenuItems : 0
      }
    );
  }, [open]);

  return scope;
}

export default useMenuAnimation