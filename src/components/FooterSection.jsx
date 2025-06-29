import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

function FooterSection() {
  useEffect(() => {
      AOS.init({ duration: 1000 })
    }, [])
  return (
    <>
      <div
        className="text-xl font-bold px-10"
        data-aos="fade-up"
        data-aos-offset="80"
        data-aos-easing="ease-in-sine"
      >
        <h1 className='text-center'>Designed By Subhashis Das</h1>
      </div>
    </>
  )
}

export default FooterSection