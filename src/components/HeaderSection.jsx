import React, { useEffect, useState } from 'react'
import useBoldMenu from '../hooks/useBoldMenu'
import useWhiteSelect from '../hooks/useWhiteSelect';
import { VscMenu, VscChromeClose } from "react-icons/vsc";


function HeaderSection() {
  const [isOpen, setIsOpen] = useState('false');
  const toggleDrawer = () => setIsOpen(!isOpen);

  const [disableState, setDisableState] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
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
  useWhiteSelect();

  return (
    <>
      <div className={`${disableState ? (isScrolled ? "fixed" : "relative") : ''} navbar_responsive navbar_responsive_max_tablet navbar_responsive_min_tablet`}>
        <div className='min_large_screen'>
          <div className={`text-3xl font-bold uppercase max_large_screen_navlogomenu`}>
            <h1 className='text-white'>Subhashis</h1>
            <button className='block lg:hidden' onClick={toggleDrawer}>
              <div className='menucol'>{isOpen ? <VscMenu /> : <VscChromeClose />}</div>
            </button>
          </div>
          <ul className={`mainMenu text-gray-500 font-bold displaymenu ${isOpen ? '-top-[500%]' : 'top-[100%]'}`}>
            <li className='text-white py-5 lg:py-0'>
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