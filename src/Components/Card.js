import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Card = ({ image, title, info, link }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const [onceLoaded, setOnceLoaded] = useState(false);
  const cardVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.2,
        delay: 0.5,
      },
    },
    hidden: {
      scale: 0.1,
      opacity: 0,
    },
  };
  useEffect(() => {
    //console.log("About is in view = ", inView);
    if (inView) {
      animation.start("visible");
      setOnceLoaded(true);
    }
    if (!inView && !onceLoaded) {
      animation.start("hidden");
    }
  }, [inView, animation, onceLoaded]);
  return (
    <motion.div
      ref={ref}
      animate={animation}
      variants={cardVariant}
      className="max-w-xs rounded overflow-hidden  bg-gray-900"
    >
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl font-nunito  text-yellow-600 mb-2">{title}</div>
        <p className="text-gray-300 font-extralight text-base">{info}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="border-2 px-3 py-1 text-white font-extralight hover:bg-yellow-500 border-yellow-500 ">
          <a href={link} rel="noopener noreferrer" target="_blank">
            Visit Here
          </a>
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
