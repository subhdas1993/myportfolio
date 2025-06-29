import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

function SectionHeading({ secnum, sechead }) {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <>
      <div
        className='relative'
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <div className='relative text-gray-300 text-[20svh]'>{secnum}</div>
        <div className='absolute text-[7svh] top-1/3 left-1/5 lg:left-1/23'>{sechead}</div>
      </div>
    </>
  )
}

export default SectionHeading