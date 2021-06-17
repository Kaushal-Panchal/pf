import React from "react";
import HomeMe from "../Assets/Me.png";
import WingR from "../Assets/WingR.png";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <div id="home" className="flex sm:flex-row flex-col-reverse h-screen justify-end items-center pt-10">
        <div className="text-white text-center  sm:w-36">
          <motion.div
            style={{ zIndex: 5 }}
            className=" sm:absolute p-5  font-thin font-montSerrat md:text-6xl text-4xl  "
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring", bounce: 0.5, stiffness: 120 }}
          >
            Kaushal Panchal
            <motion.div
              className="md:text-xl text-lg  font-nunito subpixel-antialiased text-white mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 2 }}
            >
              <p className="leading-loose">
                Namastey🙏🏻 , I am a Software Engineer ! <br />{" "}
                <span className="text-4xl font-thin italic text-pink-600">&</span> <br /> I love to work on
                real life problems and build optimal solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="text-white relative h-full  w-10/12 ">
          <div>
            <div className="absolute top-20 sm:top-9  left-0 right-1/2 xl:right-1/3 ml-auto mr-auto">
              <motion.img
                style={{ zIndex: 0 }}
                className="sm:h-96 h-64 lg:w-96 w-72 mx-auto transform scale-x-flipX"
                src={WingR}
                alt="WingL"
                initial={{ y: 300, rotateZ: 80, rotateY: 50, scaleX: -1 }}
                animate={{ y: 0, rotateZ: 0, rotateY: 0, scaleX: -1 }}
                transition={{ duration: 2 }}
              />
            </div>
            <div className="absolute top-20 sm:top-9  left-1/2 xl:left-1/3 right-0 ml-auto mr-auto">
              <motion.img
                style={{ zIndex: 1 }}
                className="sm:h-96 h-64 lg:w-96 w-72 mx-auto"
                src={WingR}
                alt="WingR"
                initial={{ y: 300, rotateZ: 80, rotateY: 50, scaleX: 1 }}
                animate={{ y: 0, rotateZ: 0, rotateY: 0, scaleX: 1 }}
                transition={{ duration: 2 }}
              />
            </div>
            <div className="absolute top-1/4  left-0 right-0 ml-auto mr-auto">
              <motion.img style={{ zIndex: 2 }} className="h-96 mx-auto" src={HomeMe} alt="CenterMe" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
