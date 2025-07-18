import React, { useEffect, useState } from 'react'
import useBoldMenu from '../hooks/useBoldMenu'
import useOrangeSelect from '../hooks/useOrangeSelect';
import { VscMenu, VscChromeClose } from "react-icons/vsc";

import AOS from 'aos'
import 'aos/dist/aos.css'

function HeaderSection() {
  const [isOpen, setIsOpen] = useState('false');
  const toggleDrawer = () => setIsOpen(!isOpen);

  const [disableState, setDisableState] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const [enableAOS, setEnableAOS] = useState(true);
  useEffect(() => {
    // AOS.init({ duration: 800, once: true })
    const width = window.innerWidth;

    if (width < 640) {
      setEnableAOS(false);
    } else {
      setEnableAOS(true);
      AOS.init({ duration: 800, once: true });
    }

    const handleNavScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const mediaQuery = window.matchMedia('(max-width: 64rem)');
    const handleMediaQueryChange = (e) => {
      setDisableState(e.matches); // Update state based on media query
    };

    // Initial check
    setDisableState(mediaQuery.matches);

    // Listen for changes in media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    window.addEventListener('scroll', handleNavScroll);

    return () => {
      window.removeEventListener('scroll', handleNavScroll);

      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useBoldMenu();
  useOrangeSelect();

  return (
    <>
      <div className={`${disableState ? (isScrolled ? "fixed" : "relative") : ''} navbar_responsive navbar_responsive_max_tablet navbar_responsive_min_tablet`} {...(enableAOS ? { 'data-aos': 'fade-down' } : {})}>
        <div className='min_large_screen'>
          <div className={`text-3xl font-bold uppercase max_large_screen_navlogomenu`}>
            <h1 className='text-white'>Subhashis</h1>
            <button className='block lg:hidden' onClick={toggleDrawer} title="Menu">
              <div className='menucol'>{isOpen ? <VscMenu /> : <VscChromeClose />}</div>
            </button>
          </div>
          <ul className={`mainMenu text-white font-bold displaymenu ${isOpen ? '-top-[500%]' : 'top-[100%]'}`}>
            <li className='text-orange-500 py-5 lg:py-0'>
              <a href="#intro" className='boldMenu pb-5 lg:py-0' onClick={toggleDrawer}>Intro</a>
            </li>
            <li className='py-5 lg:py-0'>
              <a href="#aboutme" className='boldMenu py-5 lg:py-0' onClick={toggleDrawer}>About</a>
            </li>
            <li className='py-5 lg:py-0'>
              <a href="#works" className='boldMenu py-5 lg:py-0' onClick={toggleDrawer}>Works</a>
            </li>
            <li className='py-5 lg:py-0'>
              <a href="#contactme" className='boldMenu py-5 lg:py-0' onClick={toggleDrawer}>Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default HeaderSection