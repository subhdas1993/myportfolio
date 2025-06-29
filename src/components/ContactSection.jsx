import React, { useRef } from 'react'

import SectionHeading from '../subComponents/SectionHeading'
import emailjs from '@emailjs/browser';

function ContactSection() {
  const form = useRef();
  const form_name = useRef(null);
  const form_email = useRef(null);
  const form_msg = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nn51xri', 'template_osxhova', form.current, 'jHVtTFjGS2hbNVWdg')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <>
      <div id="contactme" className="main_section h-[90svh] px-6 lg:px-10 pt-20 lg:pt-15">
        <SectionHeading secnum='03' sechead='Contact Me' />
        <div>
          <form className='block' ref={form} onSubmit={sendEmail}>
            <div className="mx-1 md:flex mb-6">
              <div
                className="md:w-1/2 px-3 mb-6 md:mb-0"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-delay="500"
              >
                <input className="appearance-none block w-full bg-transparent border border-0 border-b-2 border-[#00000050] focus:outline-none focus:border-black focus:border-b-2 py-3 mb-3" id="name" type="text" placeholder="Enter your Name" ref={form_name} name="sender_name" />
              </div>
              <div
                className="md:w-1/2 px-3"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-delay="600"
              >
                <input className="appearance-none block w-full bg-transparent border border-0 border-b-2 border-[#00000050] focus:outline-none focus:border-black focus:border-b-2 py-3 mb-3" id="email" type="email" placeholder="Enter your Email" ref={form_email} name="sender_email" />
              </div>
            </div>
            <div className="mx-1 md:flex mb-6">
              <div
                className="md:w-full px-3"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-delay="700"
              >
                <textarea className="appearance-none block w-full bg-transparent border border-0 border-b-2 border-[#00000050] focus:outline-none focus:border-black focus:border-b-2 py-3 mb-3" id="massage" type="password" placeholder="What's you massage" ref={form_msg} name="sender_msg"></textarea>
              </div>
            </div>
            <input 
              type="submit" 
              value="Submit" 
              className='block landscape:w-1/6 portrait:w-1/2 mx-auto outline font-bold text-xl py-4 transition-all duration-1000 ease-in-out'
              data-aos="fade-up"
              data-aos-offset="180"
              data-aos-easing="ease-in-sine"
              data-aos-delay="800"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactSection