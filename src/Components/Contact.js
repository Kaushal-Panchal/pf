import React, { useEffect, useState } from "react";
import Instagram from "./ContactInfo/Instagram";
import LinkedIn from "./ContactInfo/LinkedIn";
import Mail from "./ContactInfo/Mail";
import Twitter from "./ContactInfo/Twitter";
import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
const Contact = () => {
  const { ref, inView } = useInView();
  const [onceLoaded, setOnceLoaded] = useState(false);
  const animation = useAnimation();
  const infoVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      y: "-10vh",
      opacity: 0,
    },
  };
  const contactVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      y: "10vh",
      opacity: 0,
    },
  };
  useEffect(() => {
    //console.log("Contact is in view = ", inView);
    if (inView) {
      //console.log("playing");
      animation.start("visible");
      setOnceLoaded(true);
    }
    if (!inView && !onceLoaded) {
      animation.start("hidden");
    }
  }, [inView, animation, onceLoaded]);
  const sendEmail = (e) => {
    e.preventDefault();
    //console.log(e.target);
    emailjs.sendForm("service_jq1wr8s", "template_74er5d9", e.target, "user_fZydSTRdAs4HCVI7NdieU").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  return (
    <div id="contact" className="mt-32 h-3/4 bg-gradient-to-t from-gray-900 via-black  p-1">
      <div
        style={{ borderImage: "linear-gradient(to bottom, rgb(254, 202, 202), rgba(0, 0, 0, 0)) 1 100%" }}
        className="flex md:flex-row p-5 h-full  flex-col border-r-2 border-l-2 mx-5"
      >
        <motion.div ref={ref} animate={animation} variants={infoVariant} className="text-white self-center">
          <p className="text-center font-nunito leading-loose  text-xl">
            Let's build something together ! Something new , different & meaningful. <br />
          </p>
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: 1.5,
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
              },
            }}
            className="text-pink-500 mt-5 font-semibold text-center "
          >
            "Just say hi 👋"
          </motion.div>
          <div className="mt-10 w-min mx-auto">
            <Mail />
            <Twitter />
            <LinkedIn />
            <Instagram />
          </div>
        </motion.div>
        <div className="md:w-3/5 w-full text-white self-center">
          <motion.div variants={contactVariant} animate={animation} className="sm:p-5 sm:w-4/5 mx-auto">
            <form className="flex flex-col " autoComplete="off" onSubmit={sendEmail}>
              <input
                className="focus:border-pink-600  bg-transparent my-7 focus:outline-none  py-3 text-white border-pink-700 border-b-2 "
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
              />

              <input
                className="focus:border-pink-600  bg-transparent my-7 focus:outline-none  py-3 text-white border-pink-700 border-b-2"
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
              />
              <input
                className="focus:border-pink-600  bg-transparent my-7 focus:outline-none  py-3 text-white border-pink-700 border-b-2"
                type="text"
                name="subject"
                placeholder="Subject"
                autoComplete="off"
              />
              <textarea
                className="focus:border-pink-600  bg-transparent my-7 focus:outline-none  py-3 text-white border-pink-700 border-b-2"
                name="message"
                placeholder="Your Message"
                autoComplete="off"
              />
              <input
                className="mx-auto my-10 px-6 py-2 font-nunito font-extralight cursor-pointer bg-transparent hover:bg-pink-700 border-pink-700 border-2 border-dashed"
                type="submit"
                value="Send"
              />
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
