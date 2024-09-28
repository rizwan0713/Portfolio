import React, { useEffect } from "react";

// import homeLogo from "../../assets/home/homeLogo2.png";
import circle from "../../assets/diamondIcons/circle.png";
import CTAButton from '../common/CTAButton';
import { TypeAnimation } from 'react-type-animation';

import { fadeIn, slideIn } from '../../utils/motion';

import { BsStars } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'

import { motion } from 'framer-motion';
import { useDispatch, useSelector } from "react-redux";
import { setActiveSection } from "../../reducers/slices/navSlice";
import { useInView } from "react-intersection-observer";
import NextJs from "../../assets/homeIcons/next.png"
import ReactJs from "../../assets/homeIcons/react.png"
import Tailwind from "../../assets/homeIcons/tailwind.png"
import NodeJs from "../../assets/homeIcons/node.png"

import './Home.css'

const Home = () => {


    const dispatch = useDispatch();

    const {ref, inView} = useInView({
      threshold: 0.7
    });
  
    const {timeOfLastClick} = useSelector((state)=> state.activeSec);
  
    useEffect(()=>{
      if(inView && Date.now() - timeOfLastClick > 1000){
        dispatch(setActiveSection("home"));
      }
    },[inView]);


  return (
    // /* Home Section  INTRO  */
    <div
      ref={ref}
      id="home"
      className="scroll-mt-20 w-[95%] mt-[4rem] sm:mt-[5rem] max-w-[1260px] mx-auto py-28 sm:py-44 relative dark:text-white grid place-items-center"
    >

      {/* Animations */}
      <div
          className="w-4 h-[457px] bg-indigo-500 blur-2xl absolute -left-4 top-0"
        ></div>
      <div className="linearAnimation"></div>

      <div
        className="hidden lg:block iconAnimation absolute w-[50px] left-32 top-60"
      >
        <img src={NodeJs} alt="" />
      </div>
      <div
        className="hidden lg:block iconAnimation absolute w-[50px] left-20 top-28"
      >
        <img src={NextJs} alt="" />
      </div>
      <div
        className="hidden lg:block iconAnimation absolute w-[50px] right-20 top-24"
      >
        <img src={Tailwind} alt="" />
      </div>
      <div
        className="hidden lg:block iconAnimation absolute w-[50px] right-32 top-72"
      >
        <img src={ReactJs} alt="" />
      </div>


      {/*=========================== Left Container Side ===========================*/}
      <div className="hidden flex-1 max-w-[500px] dark:max-w-[800px]  flex-col gap-2 justify-start md:justify-center md:items-start relative z-10 dark:hidden"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-2xl font-medium text-rich-black-900 dark:text-white"
          initial="hidden"
          animate="show"
          variants={fadeIn("right", "ease", 1.8, 1)}
        >
          Hey there,
          <p className="text-3xl">This is Rizwan</p>
        </motion.h2>
        <motion.p
          className="text-4xl md:text-5xl font-bold md:text-left text-rich-purple-600 dark:text-[#6e96cf]"
          initial="hidden"
          animate="show"
          variants={fadeIn("right", "ease", 2, 1)}
        >
          I am{" "}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Developer",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              // '',
              // 1000,
              "Designer",
              2000,
            ]}
            wrapper="span"
            speed={1}
            style={{ color: "#3c4250", display: "inline-block" }}
            repeat={Infinity}
            omitDeletionAnimation={false}
          />
        </motion.p>
        <motion.p
          className="text-rich-black-700 md:text-xl dark:text-rich-black-200"
          initial="hidden"
          animate="show"
          variants={fadeIn("right", "ease", 2.2, 1)}
        >
          A creative web developer, specializing in website design. Checkout my
          work below and free to get in touch if you want to work with me.
        </motion.p>


        <motion.div
          className="flex gap-2 md:gap-4 w-full justify-start mt-5"
          initial="hidden"
          animate="show"
          variants={fadeIn("right", "ease", 2.4, 1)}
        >
          {/* <div className='flex-1 max-w-fit'> */}
          <CTAButton
            text="Get In Touch"
            active={true}
            icon={<BsStars size={19} />}
          />
          {/* </div> */}
          {/* <div className='flex-1 max-w-fit'> */}
          <a
            href="/Rizwan_Resume.pdf"
            download
            className="text-[16px] sm:text-[18px] md:text-xl border-2 rounded-[25px] font-medium relative
                            flex items-center justify-center gap-1 md:gap-2 px-4 py-2 min-w-[120px]
                            "
          >
            {/* <CTAButton text="Download CV" active={false} icon={<HiDownload size={20}/>}/> */}
            <span>Download CV</span>
            <HiDownload size={20} />
          </a>
          {/* </div> */}
        </motion.div>
      </div>

      {/*=========================== Right Image Side ===========================*/}

      <div className="hidden flex-1 max-w-[550px]  justify-end relative dark:hidden">
        {/* Diamond Icon */}
        <motion.div
          className="absolute z-0 w-[30%] circleAnimation left-[30%] top-[30%] -translate-x-[80%] -translate-y-[50%]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.8 }}
        >
          <img src={circle} alt="" />
        </motion.div>

        {/* <motion.div
          className="w-[100%] z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 3, duration: 1.8 }}
        >
          <img src={homeLogo} alt="Logo" />
        </motion.div> */}
      </div>












      {/* Dark mode designing */}
      <div
        className="w-[100%] flex flex-col items-center gap-4"
      >
        {/* <div
          className="w-[8rem] rounded-full overflow-hidden border-4 border-white"
        >
          <img src={homeLogo} alt="" />
        </div> */}
        <motion.h2
          className="text-2xl px-4 font-[300] !leading-[36px] sm:!leading-[48px] text-center sm:text-4xl  tracking-[0.1rem] lg:w-[80%] max-w-[58rem]"
          initial="hidden"
          animate="show"
          variants={fadeIn("right", "ease", 1.8, 1)}
        >
          <span
            className="font-semibold"
          >Hello, I'm Rizwan. </span>
          I'm a <span
            className="font-semibold"
          >full-stack developer
            </span> with <span
              className="font-semibold"
            >1 years
              </span> of experience. I enjoy building sites & apps. My focus is on <span
                className="font-semibold"
              >Reactjs.</span>
        </motion.h2>
        <motion.p
          className="text-rich-black-700 text-base md:text-xl dark:text-rich-black-400 sm:max-w-[550px] text-center"
          initial="hidden"
          animate="show"
          variants={fadeIn("left", "ease", 2.4, 1)}
        >
          Checkout my work below and free to get in touch if you want to work with me.
        </motion.p>
        <motion.div
          className="flex gap-4 md:gap-4 w-full justify-center mt-5"
          initial="hidden"
          animate="show"
          variants={fadeIn("right", "ease", 2.8, 1)}
        >
          {/* <div className='flex-1 max-w-fit'> */}
          <CTAButton
            text="Get In Touch"
            active={true}
            icon={<BsStars size={19} />}
          />
          {/* </div> */}
          {/* <div className='flex-1 max-w-fit'> */}
          <a
            href="/Rizwan_Resume.pdf"
            download
            className="text-[16px] sm:text-[18px] md:text-xl border-2 rounded-[25px] font-medium relative
                            flex items-center justify-center gap-1 md:gap-2 px-4 py-2 min-w-[120px]
                            "
          >
            {/* <CTAButton text="Download CV" active={false} icon={<HiDownload size={20}/>}/> */}
            <span>Download CV</span>
            <HiDownload size={20} />
          </a>
          {/* </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
