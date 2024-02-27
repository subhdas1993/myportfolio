import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function contactme() {
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
    <div id="contact" className='h-[82vh] text-[#0A7029] bg-gradient-to-b from-[#DBE8D8] from-30% to-[#C8DF52] flex flex-col justify-center items-center'>
      <h1 className='font-[Kalam] font-bold text-[6vmax] text-center mb-6'>Get in touch</h1>
      <div className="bg-transparent shadow-md hover:shadow-xl transition-shadow duration-500 ease-in-out landscape:w-3/4 portrait:w-5/6 mx-auto p-3 flex flex-col">
      <form className='block' ref={form} onSubmit={sendEmail}>
        <div className="mx-1 md:flex mb-6">
          <div className="relative z-0 md:w-1/2 px-3 mb-6 md:mb-0">
            <input className="appearance-none block w-full bg-transparent border border-0 border-b-2 border-[#0A702950] focus:outline-none focus:border-[#0A7029] focus:border-b-2 py-3 mb-3 font-[kalam]" id="name" type="text" placeholder=" " ref={form_name} name="sender_name"/>
            <label className="absolute duration-300 block capitalize tracking-wide text-lg font-bold mb-2 z-[-1] origin-left top-3 font-[kalam]" htmlFor="name">
              Name
            </label>
          </div>
          <div className="relative z-0 md:w-1/2 px-3">
            <input className="appearance-none block w-full bg-transparent border border-0 border-b-2 border-[#0A702950] focus:outline-none focus:border-[#0A7029] focus:border-b-2 py-3 mb-3 font-[kalam]" id="email" type="email" placeholder=" " ref={form_email} name="sender_email"/>
            <label className="absolute duration-300 block capitalize tracking-wide text-lg font-bold mb-2 z-[-1] origin-left top-3 font-[kalam]" htmlFor="email">
              email id
            </label>
          </div>
        </div>
        <div className="relative z-0 mx-1 md:flex mb-6">
          <div className="md:w-full px-3">
            <textarea className="appearance-none block w-full bg-transparent border border-0 border-b-2 border-[#0A702950] focus:outline-none focus:border-[#0A7029] focus:border-b-2 py-3 mb-3 font-[kalam]" id="massage" type="password" placeholder=" " ref={form_msg} name="sender_msg"></textarea>
            <label className="absolute duration-300 block capitalize tracking-wide text-lg font-bold mb-2 z-[-1] origin-left top-3 font-[kalam]" htmlFor="massage">
              massage
            </label>
            {/* <p className="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p> */}
          </div>
        </div>
        <input type="submit" value="Submit" className='block landscape:w-1/6 portrait:w-1/2 mx-auto outline outline-[#0A7029] font-bold text-xl py-4 rounded-none  hover:rounded-t-3xl transition-all duration-1000 ease-in-out font-[kalam]'/>
        </form>
      </div>
    </div>
  )
}

export default contactme