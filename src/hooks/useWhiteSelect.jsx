import React, { useEffect, useCallback } from 'react'

function useWhiteSelect() {
  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('.main_section');
    if (!sections) return;

    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.mainMenu a[href*="${sectionId}"]`);
      if (!navLink || !navLink.parentElement) return;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.parentElement.classList.add('text-white');
      } else {
        navLink.parentElement.classList.remove('text-white');
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Run once on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
}

export default useWhiteSelect