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
  className="relative z-10 w-full flex flex-col scroll-m-20 gap-16 bg-white min-h-[600px] mt-12 pt-20 "
  id="socialmedia"
>
  {/* ===================================== Social Media Handle Heading ===================================== */}
  <SectionHeading text="Social Media" />
  <div className="w-[95%] max-w-[1260px] mx-auto mt-16 py-24">
    <ul className="w-full max-w-[53rem] flex mx-auto flex-wrap justify-center gap-2">
      {/* Social Media Icons */}
      <div className="flex flex-wrap gap-10 justify-center">
        {SocialMediaLinks.map((social, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 "
          >
            {/* LOGO's */}
            <div className="flex w-24 h-24 rounded-full bg-white  shadow-slate-300 justify-center items-center hover:scale-110 ease-in duration-200 shadow-[0_16px_18px_-10px_rgba(0,0,0,0.1)]">
  <a
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



            {/* Link and Names */}
            <div key={index} className="text-blue-700 mt-5 ">
            <a
              href={social.url}
              className="flex gap-2 items-center cursor-pointer"
              style={{ color: social.color }}
            >
              <FaExternalLinkAlt className="flex-shrink-0" />
              <p className="font-medium text-lg min-w-[68px]  cursor-pointer">
                {social.name}
              </p>
            </a>
          </div>

          </div>
        ))}
      </div>

      {/* Social Media Links
      <div className="flex flex-wrap gap-8 mt-12 items-center w-full max-w-[53rem] mx-auto justify-center">
        {SocialMediaLinks.map((social, index) => (
          <div key={index} className="text-blue-700">
            <a
              href={social.url}
              className="flex gap-2 items-center cursor-pointer"
              style={{ color: social.color }}
            >
              <FaExternalLinkAlt className="flex-shrink-0" />
              <p className="font-medium text-lg min-w-[68px]">
                {social.name}
              </p>
            </a>
          </div>
        ))}
      </div> */}
    </ul>
  </div>
</section>

  );
};

export default SocialMedia;
