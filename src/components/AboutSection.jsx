import React from 'react'
import SectionHeading from '../subComponents/SectionHeading'

function AboutSection() {
  return (
    <>
      <div id="aboutme" className="main_section px-6 lg:px-10 pt-20 lg:pt-15">
        <SectionHeading secnum='01' sechead='About Me' />
        <div className='text-2xl leading-[1.5] lg:leading-[2]'>
          <p className='lg:px-10 pb-3'>
            My academic and professional journey began in 2010 when I enrolled in the <span className='underline max-lg:underline-offset-4 lg:decoration-double lg:decoration-[0.1rem]'>Bachelor of Computer Applications (BCA) program at Guru Gobind Singh Indraprastha University (GGSIPU)</span>, completing it in 2013. I then pursued a <span className='underline max-lg:underline-offset-4 lg:decoration-double lg:decoration-[0.1rem]'>Master of Computer Applications (MCA) from Sikkim Manipal University (SMU)</span>, which I completed in 2017. During my final semester of MCA, I started my career as a Recruiter, gaining valuable experience in the corporate world.
          </p>

          <p className='lg:px-10 pt-3 pb-10'>
            In 2021, driven by a strong interest in technology, I decided to shift my career path and enrolled at <span className='underline max-lg:underline-offset-4 lg:decoration-double lg:decoration-[0.1rem]'>Dice Academy</span> to learn full stack development. In October 2022, I successfully completed the <span className='underline max-lg:underline-offset-4 lg:decoration-double lg:decoration-[0.1rem]'>Diploma in Full Stack Development</span>, equipping myself with the technical skills and mindset needed for a successful career in web development.
          </p>

          <p className='lg:px-10 pt-3 pb-10'>
            Then, I joined Lady First Fashions Private Limited in March 2024. That time, their website was in development. So, I have been working with the other developers and learn some new technology stacks. During the development phases, I provided some support to the founders to setup <span className='underline max-lg:underline-offset-4 lg:decoration-double lg:decoration-[0.1rem]'>Razorpay, Shiprocket, Vilpower</span> and <span className='underline max-lg:underline-offset-4 lg:decoration-double lg:decoration-[0.1rem]'>NimbusIT</span> accounts. I left the company in May 2025 and now open in the market.
          </p>
        </div>
        <div className='lg:px-10 flex flex-col max-md:gap-10 gap-20'>
          <div className='text-[6svh] ps-3 border-s-20'>Skills</div>
          <ul className='grid grid-cols-2 md:grid-cols-8 gap-10 font-extrabold'>
            <li className='flex flex-col lg:flex-row justify-center items-center'>
              <img src="/logos/html.png" alt="html" className='object-cover object-center w-3/5 lg:w-1/2' />
            </li>
            <li className='flex flex-col lg:flex-row justify-center items-center'>
              <img src="/logos/css.png" alt="css" className='object-cover object-center w-4/5 lg:w-3/5' />
            </li>
            <li className='flex flex-col lg:flex-row justify-center items-center'>
              <img src="/logos/js.png" alt="javascript" className='object-cover object-center w-4/5 lg:w-3/5' />
            </li>
            <li className='flex flex-col lg:flex-row justify-center items-center'>
              <img src="/logos/jquery_logo.png" alt="jquery" className='object-cover object-center w-4/5 lg:w-3/5' />
            </li>
            <li className='flex flex-col lg:flex-row justify-center items-center'>
              <img src="/logos/responsive.jpg" alt="responsive" className='object-cover object-center w-4/5 lg:w-3/5' />
            </li>
            <li className='flex flex-col lg:flex-row justify-center items-center'>
              <img src="/logos/github_logo.png" alt="github" className='object-cover object-center w-4/5 lg:w-3/5' />
            </li>
            <li className='flex flex-col lg:flex-row justify-center items-center'>
              <img src="/logos/bootstrap_logo.png" alt="bootstrap" className='object-cover object-center w-4/5 lg:w-3/5' />
            </li>
            <li className='flex flex-col lg:flex-row justify-center items-center'>
              <img src="/logos/tailwindCSS.png" alt="tailwindCSS" className='object-cover object-center w-4/5 lg:w-3/5' />
            </li>
            <li className='flex flex-col lg:flex-row justify-center items-center'>
              <img src="/logos/reactjs_logo.png" alt="react" className='object-cover object-center w-4/5 lg:w-3/5' />
            </li>
            <li className='flex flex-col lg:flex-row justify-center items-center'>
              <img src="/logos/node_logo.png" alt="node" className='object-cover object-center w-4/5 lg:w-3/5' />
            </li>
            <li className='flex flex-col lg:flex-row justify-center items-center'>
              <img src="/logos/expressjs_logo.png" alt="express" className='object-cover object-center w-4/5 lg:w-3/5' />
            </li>
            <li className='flex flex-col lg:flex-row justify-center items-center'>
              <img src="/logos/wordpress.png" alt="wordpress" className='object-cover object-center w-4/5 lg:w-3/5' />
            </li>
            <li className='flex flex-col lg:flex-row justify-center items-center'>
              <img src="/logos/MySQL.png" alt="mysql" className='object-cover object-center w-4/5 lg:w-3/5' />
            </li>
            <li className='flex flex-col lg:flex-row justify-center items-center'>
              <img src="/logos/php.png" alt="php" className='object-cover object-center w-4/5 lg:w-3/5' />
            </li>
            <li className='flex flex-col lg:flex-row justify-center items-center'>
              <img src="/logos/laravel.png" alt="laravel" className='object-cover object-center w-4/5 lg:w-3/5' />
            </li>
            <li className='flex flex-col lg:flex-row justify-center items-center'>
              <img src="/logos/typescript.png" alt="typescript" className='object-cover object-center w-4/5 lg:w-3/5' />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default AboutSection