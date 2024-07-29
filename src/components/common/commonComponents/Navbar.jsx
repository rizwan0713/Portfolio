import React, { useEffect, useRef, useState } from 'react'

import navLinks from '../../../data/NavLink'

import { useAnimate, motion, stagger, delay } from 'framer-motion';
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveSection, setTimeOfLastClick } from '../../../reducers/slices/navSlice'

import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";


import './Navbar.css';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const Navbar = ({ theme, setTheme }) => {

    const [sideBarOpen, setSideBarOpen] = useState(false);


    const changeTheme = () => {
        if (theme === "dark") {
            setTheme("light")
            localStorage.setItem("theme", "light")
        }
        else {
            setTheme("dark")
            localStorage.setItem("theme", "dark")
        }
    }

    const { activeSection } = useSelector((state) => state.activeSec);
    const dispatch = useDispatch();

    const hidden = {
        opacity: 0,
        y: -120,
    }
    const show = {
        opacity: 1,
        y: 0
    }

    return (



        <div className='h-[4rem] sm:h-[5rem] flex items-center  w-full z-[900] fixed top-0 box-border bg-white dark:bg-black shadow-[0px_4px_10px_#dbd7fb] dark:shadow-[0px_4px_10px_#6674cc40]'>
            <div className='flex gap-4 justify-between items-center w-[95%] max-w-[1260px] mx-auto relative py-[0.7rem] md:py-[1.1rem]dark:border-none rounded-3xl dark:py-5 dark:bg-transparent dark:text-white'>
                <motion.a
                    href='#home'
                    className='logo text-[2rem] leading-[2rem] font-semibold'
                    initial={hidden}
                    animate={show}
                    transition={{ delay: 0.2, duration: 0.7 }}
                >
                    Rizwan.
                </motion.a>
                

                <ul
                    className={`dark:bg-black dark:text-white navList ${sideBarOpen ? 'active' : ''}`}
                >
                    {
                        navLinks.map((link, index) => (
                            <motion.li
                                className='relative'
                                initial={hidden}
                                animate={show}
                                transition={{ delay: 0.2 * (index + 2), duration: 0.7 }}
                                onClick={() => {
                                    dispatch(setActiveSection(link.name));
                                    dispatch(setTimeOfLastClick(Date.now()));
                                    setSideBarOpen(false);
                                }}
                            >
                                <a
                                    //to={link.path} key={index}
                                    href={link.path}
                                    className={clsx("z-10 text-lg py-1 px-[0.6rem] relative capitalize ", { "text-rich-purple-800 dark:text-orange-800": activeSection === link.name })}
                                >
                                    <span className='relative z-10'>
                                        {link.name}
                                    </span>

                                    {
                                        link.name === activeSection && (
                                            <motion.span className='absolute top-0 left-0 w-full h-full bg-rich-purple-100 z-0 rounded-lg'
                                                layoutId='activeSection'
                                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                            >

                                            </motion.span>
                                        )
                                    }

                                </a>

                            </motion.li>
                        ))
                    }
                    <div className='hidden md:flex items-center gap-4'>

                        <motion.div onClick={() => changeTheme()}
                            initial={hidden}
                            animate={show}
                            transition={{ delay: 1.4, duration: 0.7 }}

                        >
                            {
                                theme === "light" ?
                                    <BsFillMoonStarsFill size={24} />
                                    :
                                    <BsFillSunFill size={24} />
                            }
                        </motion.div>
                    </div>
                </ul>

                <div
                    className='md:hidden flex items-center gap-4'
                >

                    <div className='flex items-center gap-4'>

                        <motion.div onClick={() => changeTheme()}
                            initial={hidden}
                            animate={show}
                            transition={{ delay: 1.4, duration: 0.7 }}
                        >
                            {
                                theme === "light" ?
                                    <BsFillMoonStarsFill size={24} />
                                    :
                                    <BsFillSunFill size={24} />
                            }
                        </motion.div>
                    </div>

                    <div className=''
                        onClick={() => {
                            setSideBarOpen(prev => !prev);
                        }}
                    >
                        {
                            sideBarOpen ? <MdClose size={28} /> : <RiMenu3Fill size={24} />
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar