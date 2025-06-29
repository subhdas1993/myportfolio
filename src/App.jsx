import { lazy, Suspense } from 'react'
import './App.css'
import HeaderSection from './components/HeaderSection'
import IntroSection from './components/IntroSection'

// const HeaderSection = lazy(() => import('./components/HeaderSection'));
// const IntroSection = lazy(() => import('./components/IntroSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const WorkSection = lazy(() => import('./components/WorkSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const FooterSection = lazy(() => import('./components/FooterSection'));


function App() {
  return (
    <>
      <div className='hidden max-lg:landscape:flex lg:portrait:flex justify-center items-center h-[100svh]'>
        <div className='font-bold text-3xl'>Rotation is not applicable</div>
      </div>
      <div className='block max-lg:landscape:hidden lg:portrait:hidden'>
        <HeaderSection />
        <IntroSection />
        <Suspense fallback={<div className='py-3 font-bold text-[2vmax]'>Loading.......</div>}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<div className='py-3 font-bold text-[2vmax]'>Loading.......</div>}>
          <WorkSection />
        </Suspense>
        <Suspense fallback={<div className='py-3 font-bold text-[2vmax]'>Loading.......</div>}>
          <ContactSection />
        </Suspense>
        <Suspense fallback={<div className='py-3 font-bold text-[2vmax]'>Loading.......</div>}>
          <FooterSection />
        </Suspense>
      </div>

    </>
  )
}

export default App
