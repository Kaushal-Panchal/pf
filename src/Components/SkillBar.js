import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
const SkillBar = ({ name, percent }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const barVariant = {
    finalWidth: {
      width: `${percent}%`,
      transition: { duration: 2, type: "tween" },
    },
    initialWidth: {
      width: 0,
    },
  };
  useEffect(() => {
    //console.log("About is in view = ", inView);
    if (inView) {
      animation.start("finalWidth");
    }
    if (!inView) {
      animation.start("initialWidth");
    }
  }, [inView, animation]);

  return (
    <div ref={ref} className="relative pt-1 w-full">
      <div className="sm:text-xl text-base font-nunito py-2">{name}</div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex  bg-gray-800">
        <motion.div
          variants={barVariant}
          animate={animation}
          style={{ width: `${percent}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-700"
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;
