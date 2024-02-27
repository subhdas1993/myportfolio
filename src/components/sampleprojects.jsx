import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import projectDetails from './projectDetails'

function sampleprojects({ setIsModalOpen, setIsModalData }) {
  const pd = projectDetails;

  return (
    <div id="sample" className='min-h-[100vh] text-[#0A7029] bg-gradient-to-b from-[#C8DF52] from-30% to-[#DBE8D8]'>
      <h1 className='font-[Kalam] font-bold text-[6vmax] text-center pt-[8vh]'>Sample Project</h1>

      <div className='flex flex-wrap justify-evenly items-center landscape:w-4/5 portrait:w-full mx-auto portrait:px-10'>
        {
          pd.map((item) => {
            return (
              <>
                <div key={item.key} className='relative portrait:w-full landscape:w-5/12 aspect-[16/9] prodetailshover'>
                  <div className={`opacity-100 w-full h-full pd1`}>                    
                    <LazyLoadImage
                      alt={item.img}
                      src={`../projectsnap/${item.img}`}
                      effect='opacity'
                      className='w-full' />
                  </div>
                  <div className='absolute opacity-0 pd2'>
                    <button onClick={() => { setIsModalOpen(true); setIsModalData([item.title, item.link, item.desc, item.tech, item.npm]) }} className="bg-[#0A7029] text-[#FEDE00] px-4 py-2 rounded font-bold focus:outline-none" type='button'>
                      Learn More
                    </button>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>

    </div>
  )
}

export default sampleprojects
