import React, { useEffect } from 'react'
import SectionHeading from '../common/SectionHeading'
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSection } from '../../reducers/slices/navSlice';

const About = () => {

    const [ref, inView] = useInView({
        threshold: 1
    });
    const dispatch = useDispatch();
    const {timeOfLastClick} = useSelector((state)=> state.activeSec);
    useEffect(()=>{
        if(inView && Date.now() - timeOfLastClick > 1000){
            dispatch(setActiveSection("about"));
        }
    },[inView])


  return (
    <section ref={ref} id='about' className='scroll-mt-20 '>
        <SectionHeading text='About'/>

        <div className='w-[95%] max-w-[1260px] mx-auto text-[1.2rem] flex justify-between gap-5'>
            <div className='flex-1 flex justify-center flex-col font-Inter text-[18px]'>
                <p className='leading-[1.8rem] tracking-wide text-center text-rich-black-700 font-medium dark:text-rich-black-50'>
                    Pursuing graduation with a degree in BCA, I decided to pursue my passion for programming. I enrolled in a coding bootcamp and learned MERN - STACK web development. My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. My core stack is React, ExpressJs, MongoDB and Data Structures & Algorithms. I am also familiar with C++, JavaScript and Java. I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer.
                </p>
            </div>

        </div>
    </section>
  )
}

export default About
