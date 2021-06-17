import React, { useEffect, useState } from "react";
import Card from "./Card";
import playGround from "../Assets/ProjectsImages/1.gif";
import chess from "../Assets/ProjectsImages/2.gif";
import r3f from "../Assets/ProjectsImages/3.gif";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Github from "./ContactInfo/Github";

const playGroundInfo =
  "This A ReactJS application mainly built for students to support their class room activities. Has features like - Notes , Dictionary etc.";
const chessInfo =
  "This web app is a normal multiplayer chess game, supports real-time game sessions and uses Firebase as backend.";
const r3fInfo = "A personal portfolio website which showcase 3D graphics and models of myself.";
const Work = () => {
  const { ref, inView } = useInView();
  const [onceLoaded, setOnceLoaded] = useState(false);
  const animation = useAnimation();
  const titleVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.2,
      },
    },
    hidden: {
      scale: 0.1,
      opacity: 0,
    },
  };

  useEffect(() => {
    //console.log("Work is in view = ", inView);
    if (inView) {
      animation.start("visible");
      setOnceLoaded(true);
    }
    if (!inView && !onceLoaded) {
      animation.start("hidden");
    }
  }, [inView, animation, onceLoaded]);
  return (
    <div id="work" className=" mt-32 mx-6">
      <motion.div
        ref={ref}
        animate={animation}
        variants={titleVariant}
        className="text-red-200 text-4xl text-center font-nunito font-thin "
      >
        WORK
      </motion.div>
      <div className="mt-16 m-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-items-center">
        <Card
          image={playGround}
          title={"PlayGround"}
          info={playGroundInfo}
          link={"https://kaushal-panchal.github.io/react-PlayGround/"}
        />
        <Card
          image={chess}
          title={"Chess"}
          info={chessInfo}
          link={"https://github.com/Kaushal-Panchal/react-Chess"}
        />
        <Card
          image={r3f}
          title={"3D Portfolio"}
          info={r3fInfo}
          link={"https://github.com/Kaushal-Panchal/r3f_Portfolio"}
        />
      </div>
      <div className="text-center mt-20">
        <Github />
      </div>
    </div>
  );
};

export default Work;
