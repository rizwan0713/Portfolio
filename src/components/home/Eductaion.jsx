import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "../common/SectionHeading";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { setActiveSection } from "../../reducers/slices/navSlice";
import { experience } from "../../data/SkillsData";
const Eductaion = () => {
  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { timeOfLastClick } = useSelector((state) => state.activeSec);

  const currentTheme = localStorage.getItem("theme");
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      dispatch(setActiveSection("experience"));
    }
  }, [inView]);

  const followCurson = (e)=>{
    // var moveTimer;
    console.log(e);

    const bg = document.getElementById("circleHover");
    // clearTimeout(moveTimer);
    console.log(edSection.getBoundingClientRect());

    bg.style.left = `${e.clientX }px`;
    bg.style.top = `${e.clientY - edSection.getBoundingClientRect().top}px`;

    bg.style.opacity = 1;


  }

  const edSection = document.getElementById("educationSection");
  if(edSection) {

  edSection.addEventListener("mouseover", followCurson);
  edSection.addEventListener("mousemove", followCurson);
  edSection.addEventListener("mouseenter", followCurson);
 
  edSection.addEventListener("mouseleave",(e)=>{
    const bg = document.getElementById("circleHover");
   
    bg.style.opacity = 0;
  })

}

  return (
    <section ref={ref} className="relative w-full scroll-mt-20" id="experience">
      <SectionHeading text="Expericence" />
      <div
          id="educationSection" className="relative w-full py-8 overflow-hidden"
      >

        <div className="absolute dark:bg-hexagon bg-cover bg-no-repeat inset-0 z-[1]"> </div>
        <div id="circleHover" className="hidden md:dark:block absolute h-48 w-48 blur-lg bg-gradient-to-r from-[#335bf4] to-[#2ae9c9] opacity-0 translate-x-[-50%] translate-y-[-50%] z-0  "></div>

      <div className=" w-[95%] max-w-[1260px] mx-auto mt-6 relative z-20">
        <VerticalTimeline className="w-full" lineColor={`${currentTheme === "light"?"White": "#999daa"}` }>
          {experience.map((el, index) => (
              <ExpericenceItem data={el} key={index} currentTheme={currentTheme}/>
          ))}
        </VerticalTimeline>
      </div>
      </div>
    </section>
  )
}

const ExpericenceItem = ({data, currentTheme}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work dark:text-rich-black-5 "
      contentStyle={{
        background: `${currentTheme === "light" ? "#f2f4f6" : "#000814"}`,
        boxShadow: "none",
        border: `1px solid ${currentTheme==="light"? "white" : "#161D29"}`,
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{ borderRight: `${currentTheme==="light"? "0.5rem solid  #9ca3af" : "0.5rem solid #999DAA"}` }}
      date={data.date}
      iconStyle={{ background: `${currentTheme==="light"? "white" : "#000814"}`, fontSize: "1.5rem", 
        border : "black"
      }}
      icon={data.icon}
    >
      <h3 className="font-semibold dark:text-rich-black-5 capitalize">{data.heading}</h3>
      <h4 className="font-normal mt-0">{data.subHeading}</h4>
      <p className="mt-1 text-gray-700 dark:text-rich-black-200">{data.desc}</p>
    </VerticalTimelineElement>
  )
}

export default Eductaion;
