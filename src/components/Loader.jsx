import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <motion.div
        animate={{ x: [0, 26, 0] }}
        transition={{ duration: 1, ease: "linear", repeat: Infinity }}
        className="w-4 h-4 rounded-full bg-blue-500 filter mix-blend-screen"
      ></motion.div>
      <motion.div
        animate={{ x: [0, -26, 0] }}
        transition={{ duration: 1, ease: "linear", repeat: Infinity }}
        className="w-4 h-4 rounded-full bg-yellow-500 filter mix-blend-screen"
      ></motion.div>
      &nbsp;
    </div>
  );
}
