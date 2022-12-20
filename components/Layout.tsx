import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  children: React.ReactElement;
};

const Layout = ({ children }: Props) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);

    const handleWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: width < 768 ? -100 : -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, y: -300 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
