import {} from "react";
import { motion } from "framer-motion";

export default function Loader() {
  //
  return (
    <div className="w-full min-h-screen flex justify-center items-center absolute top-0 left-0 bg-gray-900/50">
      <div className="">
        <div className="flex">
          <motion.div
            // variants={moveVariants}
            // animate="visible"
            animate={{ x: [0, 32, 0] }}
            transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
            className="w-8 h-8 rounded-full bg-blue-500 mix-blend-screen"
          ></motion.div>
          <motion.div
            animate={{ x: [0, -32, 0] }}
            transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
            className="w-8 h-8 rounded-full bg-yellow-500 mix-blend-screen"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
