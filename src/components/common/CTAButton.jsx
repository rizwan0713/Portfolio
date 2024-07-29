import React from 'react'

// import { Link } from 'react-router-dom'
import "./CTAButton.css";

const CTAButton = ({text, active, icon}) => {
  return (
    <div
        className={`text-[16px] sm:text-[18px] md:text-xl border-2 rounded-[25px] font-medium relative CTAButton overflow-hidden
            ${active ? "activeButton text-white" : ""}
        `}  
    >
        <a
            href='#contact'
            className='flex items-center justify-center gap-1 md:gap-2 px-4 py-2 min-w-[120px]'
        >
            {
              icon && 
              icon
            }
            {text}
        </a>
    </div>
  )
}

export default CTAButton