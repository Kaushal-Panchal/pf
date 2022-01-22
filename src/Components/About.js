import React, { useEffect, useState } from "react";
import PoolMe from "../Assets/PoolMe.png";
// import Ball from "../Assets/Ball.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const About = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();
    const [onceLoaded, setOnceLoaded] = useState(false);
    const titleVariant = {
        visible: {
            opacity: 1,
            transition: {
                type: "spring",
                delay: 0.5,
            },
        },
        hidden: {
            opacity: 0,
        },
    };
    const imgVariant = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                delay: 0.5,
                stiffness: 50,
            },
        },
        hidden: {
            x: "-100vw",
            opacity: 0,
        },
    };
    const paraVariant = {
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                delay: 0.5,
                stiffness: 50,
            },
        },
        hidden: {
            x: "10vw",
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
        <>
            <div id="about" className="  p-1">
                <div ref={ref} className="  text-white  border-pink-600 mx-5">
                    <motion.div
                        variants={titleVariant}
                        initial={{}}
                        animate={animation}
                        className=" text-4xl text-center mb-5 font-nunito text-pink-400"
                    >
                        <ul className="list-outside mx-5 ">
                            <li>About Me</li>
                        </ul>
                    </motion.div>
                    <div className=" sm:h-3/4  lg:w-4/5 lg:mx-auto">
                        <div className=" p-5 flex h-full sm:flex-row  flex-col  ">
                            <div className="relative sm:w-3/4 md:w-auto ">
                                <motion.img
                                    variants={imgVariant}
                                    animate={animation}
                                    className="sm:w-3/4 w-0 filter  hue-rotate-60"
                                    src={PoolMe}
                                    alt="Pool"
                                />
                                {/* <img
                  className="sm:w-1/2  w-0  md:absolute inset-x-0 bottom-0 filter -hue-rotate-90 "
                  src={Ball}
                  alt=""
                  srcset=""
                /> */}
                            </div>
                            <motion.div
                                animate={animation}
                                variants={paraVariant}
                                className="md:w-3/4 w-full text-justify self-center"
                            >
                                <p className="leading-loose font-light text-lg ">
                                    I am a man of{" "}
                                    <span className="text-pink-500 italic">
                                        focus
                                    </span>{" "}
                                    ,
                                    <span className="text-pink-500 italic">
                                        {" "}
                                        commitment{" "}
                                    </span>{" "}
                                    & sheer f*kin
                                    <span className="text-pink-500 italic">
                                        {" "}
                                        will
                                    </span>{" "}
                                    ! <br /> Too much for an intro ? <br />
                                    Ok let's try again <br />I am a software
                                    engineer with a degree in Computer Science.
                                    I am very much passionate when it comes to{" "}
                                    <span className="text-pink-500 italic">
                                        coding{" "}
                                    </span>
                                    and{" "}
                                    <span className="text-pink-500 italic">
                                        designing
                                    </span>
                                    . I am keen to work with a team / company
                                    whose aim is to build a better{" "}
                                    <span className="text-pink-500 italic">
                                        future{" "}
                                    </span>
                                    ! And to join such team I am everyday
                                    pushing myself a little more to become
                                    better version of myself. Currently I am
                                    proficient in
                                    <span className="text-pink-500 italic">
                                        {" "}
                                        Full-Stack Development
                                    </span>{" "}
                                    & have a good hold on{" "}
                                    <span className="text-pink-500 italic">
                                        Algorithms
                                    </span>{" "}
                                    &{" "}
                                    <span className="text-pink-500 italic">
                                        Data Structures
                                    </span>
                                    !
                                </p>
                                <motion.button
                                    whileHover={{
                                        borderStyle: "dotted",
                                        scale: 1.1,
                                        transition: {
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            duration: 0.5,
                                        },
                                    }}
                                    className="border-2 border-pink-600 px-5 py-2 my-10 focus:outline-none "
                                    onClick={(e) => {
                                        window.open(
                                            "https://drive.google.com/file/d/17x5fjHWyq7_plfRfy6buYbb_dtMPWKnb/view?usp=sharing",
                                            "_blank"
                                        );
                                    }}
                                >
                                    Resume -{">"}
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
