import React from 'react'
import email from '/email-svgrepo-com.png'
import phone from '/phone-call-svgrepo-com.png'


function contactdetails({ isScroll }) {
  return (
    <div className={`transition-all duration-1000 h-[10vmax] fixed z-10 bottom-[22vh] ${isScroll ? "landscape:left-[0.6%] portrait:left-[2%]" : "landscape:left-[-12%] portrait:left-[-20%]"} bg-transparent scale-[0.16] origin-bottom-left`}>
      <a href="mailto:subhashis93@yahoo.in">
        <img src={email} alt="email" />
      </a>
      <br />
      <a href="tel:+919971836966">
        <img src={phone} alt="phone" />
      </a>
    </div>
  )
}

export default contactdetails