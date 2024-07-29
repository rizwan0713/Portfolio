import React from 'react'


const SectionHeading = ({text}) => {
  return (
    <h2
    className='text-center relative z-10 mb-10'
>
        <span
            className='heading dark:text-transparent dark:bg-clip-text 
            dark:bg-gradient-to-br from-[#e65c00] to-[#f9d423] dark:before:bg-gradient-to-br from-[#e65c00] to-[#f9d423] dark:after:bg-gradient-to-br from-[#e65c00] to-[#f9d423]
            '
        >
            {text}
        </span>
    </h2>
  )
}

export default SectionHeading