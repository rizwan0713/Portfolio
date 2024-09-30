import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import SectionHeading from "../common/SectionHeading";
import { FaExternalLinkAlt } from "react-icons/fa";

// import {skillsData} from '../../data/SkillsData';
import { useDispatch, useSelector } from "react-redux";
import { setActiveSection } from "../../reducers/slices/navSlice";
import { SocialMediaLinks } from "../../data/SocialMediaLinks";

const SocialMedia = () => {
    const dispatch = useDispatch();
    const { ref, inView } = useInView({
      threshold: 0.75,
    });
  
    const { timeOfLastClick } = useSelector((state) => state.activeSec);
  
    useEffect(() => {
      if (inView && Date.now() - timeOfLastClick > 1000) {
        dispatch(setActiveSection("socialmedia"));
      }
    }, [inView]);
  
  


  return (
    <section
      ref={ref}
      className="relative z-10 w-full flex flex-col scroll-m-20 gap-32 bg-white min-h-[650px] mt-12 pt-12"
      id="socialmedia"
    >
      {/* ===================================== Social Media Handle Heading ===================================== */}
      <SectionHeading text="Social Media" />
      <div className="w-[95%] max-w-[1260px] mx-auto mt-5 ">
        <ul className="w-full max-w-[53rem] flex mx-auto flex-wrap justify-center gap-2">
          <div className="flex gap-24">
            {SocialMediaLinks.map((social, index) => (
              <div className=" flex flex-col hover:scale-110 ease-in  duration-200">
               <div className=" flex  w-24  h-24 rounded-full bg-white  shadow-lg justify-center items-center ">  <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.imgSrc}
                    alt={`${social.name} logo`}
                    style={{ width: "80px", height: "80px" }}
                  />
                </a>
                </div>
            
              </div>
            ))}
          </div>
          <div className="flex gap-24 mt-12 items-center w-full max-w-[53rem]  mx-auto flex-wrap justify-center ">
            
                
                {SocialMediaLinks.map((social, index) => (
                     <div className=" text-blue-700">
                      
                      <a href={social.url} className={` flex  gap-2 items-center cursor-pointer `}       style={{ color: social.color }} 
      >
                       <FaExternalLinkAlt className="" />
                       <p className="font-medium text-lg min-w-[68px]" key={index}>{social.name} </p>
                       </a>
                      
                     </div>
                ))}
               
            </div>
        </ul>
      </div>
    </section>
  );
};

export default SocialMedia;
