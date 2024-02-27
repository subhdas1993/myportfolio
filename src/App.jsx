import { useState,useEffect,Suspense,lazy } from 'react'
import './App.css'
import NavBar from './components/navbar';
import Namepics from './components/namepics';
import Aboutme from './components/aboutme';
import Contactme from './components/contactme';
import Footer from './components/footer';
import Contactdetails from './components/contactdetails';
import ProjectModal from './components/projectModal';

const Skills = lazy(() => import('./components/skills'));
const Sampleprojects = lazy(() => import('./components/sampleprojects'));

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolled2, setIsScrolled2] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalData, setIsModalData] = useState([]);

  useEffect(() => {
    const handleNavScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleNavScroll);

    return () => {
      window.removeEventListener('scroll', handleNavScroll);
    };
  }, []);

  useEffect(() => {
    const handleNavScroll2 = () => {
      if (window.scrollY > 2400) {
        setIsScrolled2(true);
      } else {
        setIsScrolled2(false);
      }
    };

    window.addEventListener('scroll', handleNavScroll2);

    return () => {
      window.removeEventListener('scroll', handleNavScroll2);
    };
  }, []);

  const handleTop = () => {
    const boxContent = document.getElementById("boxContent");
    if(boxContent){
      boxContent.scrollIntoView({behavior:'smooth'})
    }
  }
  return (
    <>
      <div id="boxContent" className='box-border'>
        <NavBar />
        <div className={`transition-all duration-700 w-full h-fit fixed z-10 ${isScrolled ? "top-0" : "top-[-50%]"}`}>
          <NavBar />
        </div>
        <Namepics />
        <Aboutme />
        <Suspense fallback={<div className='bg-[#C8DF52] font-[Kalam] font-bold text-[2vmax]'>Loading.......</div>}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div className='bg-[#C8DF52] font-[Kalam] font-bold text-[2vmax]'>Loading.......</div>}>
          <Sampleprojects setIsModalOpen={setIsModalOpen} setIsModalData={setIsModalData}/>
        </Suspense>
        <Contactme />
        <Footer />

        <Contactdetails isScroll={isScrolled2}/>
        <ProjectModal setIsModalOpen={setIsModalOpen} setIsModalData={setIsModalData} isModalOpen={isModalOpen} isModalData={isModalData}/>
        <button id="scrolltotop" title="Scroll To Top" onClick={handleTop} className={`transition-all duration-700 w-[3vmax] aspect-[1/1] fixed z-10 bottom-[10vh] rounded-full border border-[#0A7029] border-[0.3vmax] ${isScrolled ? "landscape:right-[0.6%] portrait:right-[2%]" : "right-[-12%]"} bg-[url("../up-arrow-svgrepo-com.png")] bg-transparent bg-center bg-[50%,50%] bg-no-repeat portrait:scale-[2] portrait:origin-bottom-right`}></button>
      </div>
    </>
  )
}

export default App
