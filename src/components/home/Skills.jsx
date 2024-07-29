import React, { useEffect } from 'react'


import { useInView } from 'react-intersection-observer';

import {motion} from "framer-motion";
import { fadeIn } from '../../utils/motion';
import SectionHeading from '../common/SectionHeading';

import {skillsData} from '../../data/SkillsData';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSection } from '../../reducers/slices/navSlice';

const Skills = () => {

  const {timeOfLastClick} = useSelector((state)=> state.activeSec);
  const dispatch = useDispatch();

  const {ref, inView} = useInView({
    threshold: 0.75
  });

  useEffect(()=>{
    if(inView && Date.now() - timeOfLastClick > 1000){
      dispatch(setActiveSection("skills"));
    }
  },[inView]);

  return (
    <section ref={ref} className='relative z-10 w-full flex flex-col scroll-m-20' id='skills'>

        {/* ===================================== Skills Heading ===================================== */}
        <SectionHeading text="Skills"/>
        <div className='w-[95%] max-w-[1260px] mx-auto'>
          <ul className='w-full max-w-[53rem] flex mx-auto flex-wrap justify-center gap-2'>

            {
              skillsData.map((skill, index)=>(
                <motion.li key={index}
                  className='text-center border-2 border-black/[0.1] px-5 py-3 rounded-xl bg-white dark:bg-transparent dark:border-[1.5px] dark:border-[rgba(255,255,255,0.32)] dark:text-rich-black-5'
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn("up", "ease", (0.05*index), 0.5)}
                >
                  {skill}
                </motion.li>
              ))
            }
          </ul>
        </div>
    </section>
  )
}

export default Skills