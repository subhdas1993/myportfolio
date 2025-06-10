import React, { useEffect } from 'react'

function useBoldMenu() {
  const easeFunctions = {
  easeInOutCubic: (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  },
};

function scrollTo(targetY, duration = 1200, easing = 'easeInOutCubic') {
  const start = window.scrollY;
  const change = targetY - start;
  const startTime = performance.now();
  const ease = easeFunctions[easing];

  function animateScroll(currentTime) {
    const timeElapsed = currentTime - startTime;
    const val = ease(Math.min(timeElapsed, duration), start, change, duration);
    window.scrollTo(0, val);

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

useEffect(() => {
    const triggers = document.querySelectorAll('.boldMenu');

    const handler = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        scrollTo(offsetTop);
      }
    };

    triggers.forEach(el => el.addEventListener('click', handler));

    return () => {
      triggers.forEach(el => el.removeEventListener('click', handler));
    };
  }, []);
}

export default useBoldMenu