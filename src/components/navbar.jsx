import React, { useState } from "react";

function navBar() {
  const menulistpadding = { paddingTop: '0.5rem', paddingBottom: '0.5rem' }
  const [isOpen, setIsOpen] = useState('false');
  const toggleDrawer = () => setIsOpen(!isOpen);

  const handleHomeScroll = () => {
    const namepics = document.getElementById("namepics");
    if (namepics) {
      namepics.scrollIntoView({ behavior: 'smooth' });
      toggleDrawer('false');
    }
  }
  const handleAboutScroll = () => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
      toggleDrawer('false');
    }
  }
  const handleSkillScroll = () => {
    const skills = document.getElementById("skills");
    if (skills) {
      skills.scrollIntoView({ behavior: 'smooth' });
      toggleDrawer('false');
    }
  }
  const handleSampleScroll = () => {
    const sample = document.getElementById("sample");
    if (sample) {
      sample.scrollIntoView({ behavior: 'smooth' });
      toggleDrawer('false');
    }
  }
  const handleContactScroll = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
      toggleDrawer('false');
    }
  }

  return (
    <div id="namepics" className='portrait:min-h-fit landscape:h-[9vh] bg-[#0A7029] text-[#FEDE00] font-bold flex justify-between portrait:flex-wrap landscape:flex-nowrap px-2'>
      <div className='bg-[url("../namelogo.png")] bg-transparent bg-center bg-contain bg-no-repeat landscape:w-[10%] portrait:w-[46%] lg:portrait:w-[30%] aspect-[28/9] origin-left landscape:scale-150 portrait:scale-100'></div>
      <div className="portrait:flex landscape:flex lg:portrait:hidden lg:landscape:hidden w-1/2 justify-end items-center">
        <button onClick={toggleDrawer} className="flex items-center px-3 py-2 rounded" type="button">
          <svg className="w-[3vmax] text-[#FEDE00]" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path fill="currentColor" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className='portrait:hidden landscape:hidden lg:portrait:flex lg:landscape:flex landscape:w-1/2 justify-between items-center'>
        <button onClick={handleHomeScroll}>Home</button>
        <button onClick={handleAboutScroll}>About</button>
        <button onClick={handleSkillScroll}>Skills</button>
        <button onClick={handleSampleScroll}>Sample Projects</button>
        <button onClick={handleContactScroll}>Contact</button>
      </div>
      <div className={`lg:portrait:hidden lg:landscape:hidden flex-col w-full justify-between items-end px-2 ${isOpen? "portrait:hidden landscape:hidden h-0" : "portrait:flex landscape:flex h-fit" }`}>
        <button className={`${isOpen ? "hidden" : "block"}`} onClick={handleHomeScroll}>Home</button>
        <button className={`${isOpen ? "hidden" : "block"}`} style={menulistpadding} onClick={handleAboutScroll}>About</button>
        <button className={`${isOpen ? "hidden" : "block"}`} onClick={handleSkillScroll}>Skills</button>
        <button className={`${isOpen ? "hidden" : "block"}`} style={menulistpadding} onClick={handleSampleScroll}>Sample Projects</button>
        <button className={`${isOpen ? "hidden" : "block"}`} onClick={handleContactScroll}>Contact</button>
      </div>
    </div>
  )
}

export default navBar