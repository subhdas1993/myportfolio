import React, {useState} from 'react'

function IntroSection() {
  const downloadResume = () => {
        // using Java Script method to get PDF file
        // fetch('../../resume/Subhashis Das Resume.pdf').then(response => {
        fetch('resume/SUBHASHIS_DAS_Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Subhashis_Das_Resume.pdf';
                alink.click();
            })
        })
    }
  return (
    <>
      <div id="intro" className="main_section bg-[#eceeec] h-[100svh] lg:pt-0 relative lg:static lg:flex">
        <div className='w-full lg:w-1/2 flex flex-col justify-center gap-10 lg:pl-10 absolute lg:static z-99 max-lg:text-white top-[45%]'>
          <div className='text-4xl lg:text-6xl font-bold text-center lg:text-left'>
            <h1 className='uppercase text-lg lg:text-2xl'>Hello,</h1>
            <h1 className='lg:max-tlg1:text-5xl tlg1:max-tlg2:text-[3.5rem]'>this is Subhashis Das<br/>
            a Web Developer</h1>
          </div>
          <ul className='flex gap-4 justify-center lg:justify-start max-xl:flex-wrap'>
            <li className='border-2 p-4 font-bold text-white bg-[#1A1A1A] border-[#1A1A1A] hover:bg-[#C93F1D] hover:border-[#C93F1D]'>
              <a href="#aboutme" className='p-4'>
                More About Me
              </a>
            </li>
            <li className='border-2 p-4 font-bold hover:text-white hover:bg-[#1A1A1A] hover:border-[#1A1A1A]'>
              <a href="#contactme" className='p-4'>
                Get in Touch
              </a>
            </li>
            <li className='border-2 p-4 font-bold hover:text-white hover:bg-[#1A1A1A] hover:border-[#1A1A1A]'>
              <button onClick={downloadResume}>Get My CV</button>
            </li>
          </ul>
        </div>
        {/* <div className='mix-blend-exclusion flex justify-center items-center absolute bottom-[15%] lg:bottom-[10%] lg:left-[43.5%] z-99'>
          <div className='w-20 lg:w-50 border-1 border-white'></div>
          <button onClick={downloadResume} className='border-2 px-10 py-4 font-bold text-white hover:text-[#1A1A1A] hover:bg-white'>Get My CV</button>
        </div> */}
        <div className='lg:w-1/2 relative lg:static z-98'>
        <picture>
            <source media="(max-width:40rem)" srcSet="/.netlify/images?url=/profile_picture/profile_images/profile_picture_max_680px.jpg?fm=webp?q=40" className='introsection_image' />
            <source media="(max-width:48rem)" srcSet="/.netlify/images?url=/profile_picture/profile_images/profile_picture_max_768px.jpg?fm=webp?q=40" className='introsection_image' />
            <source media="(max-width:64rem)" srcSet="/.netlify/images?url=/profile_picture/profile_images/profile_picture_max_1024px.jpg?fm=webp" className='introsection_image' />
            <source media="(max-width:80rem)" srcSet="/.netlify/images?url=/profile_picture/profile_images/profile_picture_max_680px.jpg?fm=webp" className='introsection_image' />
            <source media="(max-width:96rem)" srcSet="/.netlify/images?url=/profile_picture/profile_images/profile_picture_max_768px.jpg?fm=webp" className='introsection_image' />
            <img src="/.netlify/images?url=/profile_picture/profile_images/profile_picture.jpg?fm=webp" alt="subhashis_das" className='introsection_image' />
          </picture>
          {/* <picture>
            <source media="(max-width:40rem)" srcSet="/profile_picture/profile_images/profile_picture_max_680px.jpg" className='introsection_image' />
            <source media="(max-width:48rem)" srcSet="/profile_picture/profile_images/profile_picture_max_768px.jpg" className='introsection_image' />
            <source media="(max-width:64rem)" srcSet="/profile_picture/profile_images/profile_picture_max_1024px.jpg" className='introsection_image' />
            <source media="(max-width:80rem)" srcSet="/profile_picture/profile_images/profile_picture_max_680px.jpg" className='introsection_image' />
            <source media="(max-width:96rem)" srcSet="/profile_picture/profile_images/profile_picture_max_768px.jpg" className='introsection_image' />
            <img src="/profile_picture/profile_images/profile_picture.jpg" alt="Flowers" className='introsection_image' />
          </picture> */}
        </div>
      </div>
    </>
  )
}

export default IntroSection