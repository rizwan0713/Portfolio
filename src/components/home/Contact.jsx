import React, { useEffect, useState } from "react";
import SectionHeading from "../common/SectionHeading";
import { LuSend } from "react-icons/lu";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { setActiveSection } from "../../reducers/slices/navSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  const { timeOfLastClick } = useSelector((state) => state.activeSec);

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      dispatch(setActiveSection("contact"));
    }
  }, [inView]);



  return (
    <section ref={ref} id="contact" className="scroll-mt-20 dark:text-white">
      <SectionHeading text="Contact" />
      <div className="w-[95%] max-w-[1260px] my-4 mx-auto flex flex-col items-center gap-8">
        <p className="mx-auto w-fit text-center dark:text-rich-black-200">
          Please contact me directly at {"  "}
          <a href="mailto:rizwansalmanirsa@gmail.com"
            className="text-rich-purple-600 dark:text-orange-400 px-1"
          >
            rizwansalmanirsa@gmail.com
          </a>{"  "}
          or through this form.
        </p>
        <form    className="w-full max-w-[500px] flex flex-col  gap-2">
          <div>
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className="w-full bg-none outline-none border-2 py-2 px-3 rounded-xl
                dark:bg-rich-black-900 dark:border-rich-black-700
              "
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="w-full bg-none outline-none border-2 py-2 px-3 rounded-xl h-[200px] resize-none 
              dark:bg-rich-black-900 dark:border-rich-black-700"
            ></textarea>
          </div>

          <motion.button
        
          
            className="flex justify-center w-[120px] items-center gap-1
                    bg-rich-purple-700 text-white py-2 px-3 rounded-lg hover:bg-rich-purple-900 transition-all duration-200 group
                    dark:bg-orange-500 hover:dark:bg-orange-900
                "
            onClick={(e) => {
              e.preventDefault();
              // console.log("Submit Clicked");
            }}
            whileTap={{ scale: "0.9" }}
          >
            <button className="text-lg" >Submit</button>
            <LuSend
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
            />
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
