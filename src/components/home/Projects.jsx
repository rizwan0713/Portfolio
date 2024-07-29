import React, { useCallback, useEffect, useRef } from "react";
import SectionHeading from "../common/SectionHeading";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSection } from "../../reducers/slices/navSlice";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Project } from "../../data/Projects";

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const dispatch = useDispatch();
  const { timeOfLastClick } = useSelector((state) => state.activeSec);
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      dispatch(setActiveSection("projects"));
    }
  }, [inView]);

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section ref={ref} id="projects" className="scroll-mt-20 ">
      <SectionHeading text="Projects" />

      <div className="w-[95%] max-w-[1260px] mx-auto relative overflow-hidden mt-8">
        <Swiper
          ref={sliderRef}
          effect="cube"
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            700: {
              slidesPerView: 2,
              loop: true,
            },
            1024: {
              slidesPerView: 3,
              loop: true,
            },
          }}
        >
          {Project.map((el, index) => (
            <SwiperSlide key={index}>
              <ProjectCard projectCard={el}/>
            </SwiperSlide>
          ))}

          <div className="flex items-center justify-evenly mt-6 text-rich-black-600">
            <div
              className="prev-arrow h-10 w-10  bg-rich-black-5 dark:text-white dark:bg-rich-black-700 border-rich-purple-300 dark:border-rich-black-600 border-2  relative rounded-full grid place-content-center"
              onClick={handlePrev}
            >
              <IoIosArrowBack size={20}/>
            </div>
            <div
              className="next-arrow h-10 w-10  bg-rich-black-5 dark:text-white dark:bg-rich-black-700 border-rich-purple-300 dark:border-rich-black-600 border-2  relative rounded-full grid place-content-center"
              onClick={handleNext}
            >
              <IoIosArrowForward size={20}/>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

const ProjectCard = ({ projectCard }) => {
  return (
    <div className="bg-[#d5d5d5] w-full p-[15px] h-[15rem] overflow-hidden rounded-[10px] relative group transition-all duration-200 ease-in-out dark:bg-[#181a1b] dark:border-[#353a3c] dark:border">
      <div className="overflow-hidden rounded-[5px] h-full">
        <img
          src={projectCard.image}
          alt=""
          className="group-hover:scale-[1.1] transition-all duration-200 ease-in-out"
        />
      </div>
      <div
        className=" absolute top-[100%] p-[15px] left-0 w-full h-full bg-white dark:bg-transparent backdrop-blur-3xl  flex flex-col justify-between shadow-3dBox dark:shadow-none dark:text-rich-black-5
        group-hover:top-0 transition-all duration-200 ease-in-out
        
    "
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold capitalize text-rich-black-950">
            {projectCard.name}
          </h2>
          <p className="font-medium text-rich-black-800d dark:text-rich-black-50">
            {projectCard.description}
          </p>
        </div>
        <div className="flex items-center gap-5">
          {projectCard.array.map((icons, i) => (
            <a
              href={icons.link}
              target="_blank"
              className="p-3 bg-rich-black-5 dark:bg-rich-black-800 dark:border w-[50px] aspect-square rounded-full grid place-content-center text-black dark:text-rich-black-5 text-2xl"
            >
              {icons.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
