import React from 'react'
import SectionHeading from '../subComponents/SectionHeading'
import liveProjects from '../otherData/liveProjects'
import sampleProjectDetails from '../otherData/sampleProjectDetails'



function WorkSection() {
  return (
    <>
      <div id="works" className="main_section px-6 lg:px-10 pt-20 lg:pt-15">
        <SectionHeading secnum='02' sechead='Works'/>
        <div className='text-[6svh] ps-3 border-s-20'>Live Project</div>
        <div className='lg:px-20 pt-10'>
          {
            liveProjects.map((lpd)=>{
              return (
                <>
                  <div key={lpd.key} className='rounded-2xl lg:grid lg:grid-cols-[30%_70%] lg:grid-rows-1 lg:justify-between shadow-xl/40'>
                    <div className='lg:px-3 lg:flex lg:justify-center lg:items-center'>
                      <figure>
                      <img className='max-lg:rounded-t-2xl' src={`/.netlify/images?url=/liveprojectsnap/${lpd.img}?fm=webp&q=50`} alt={lpd.title} width="270" height="140"/>
                        <figcaption className='font-semibold text-center text-xl pt-2'>{lpd.title}</figcaption>
                      </figure>
                    </div>
                    <div className='text-justify p-5 lg:text-[1.3vmax]'>
                      <div className='max-lg:text-center text-right'><a className='font-semibold hover:underline hover:underline-offset-3' href={lpd.link}>Visit the Page</a></div>
                      <div className='font-semibold text-center lg:py-2'>Description</div>
                      <ul className='pb-4'>
                        {
                          lpd.desc.map((data)=>{
                            return(
                              <>
                                <li>{data}</li>
                              </>
                            )
                          })
                        }
                      </ul>
                      <div className='max-lg:text-center text-right'>Skills: {lpd.tech}</div>
                    </div>
                  </div>
                  <div className='py-5'></div>
                </>
              )
            })
          }
        </div>
        <div className='text-[6svh] ps-3 border-s-20'>Sample Project</div>
        <div className='lg:px-20 pt-10'>
          {
            sampleProjectDetails.map((spd)=>{
              return (
                <>
                  <div key={spd.key} className='rounded-2xl lg:grid lg:grid-cols-[30%_70%] lg:grid-rows-1 lg:justify-between shadow-xl/40'>
                    <div className='lg:px-3 lg:flex lg:justify-center lg:items-center'>
                      <figure>
                        <img className='max-lg:rounded-t-2xl' src={`/.netlify/images?url=/sampleprojectsnap/${spd.img}?fm=webp&q=50`} alt={spd.title} width="270" height="140"/>
                        <figcaption className='font-semibold text-center text-xl pt-2'>{spd.title}</figcaption>
                      </figure>
                    </div>
                    <div className='text-justify p-5 lg:text-[1.3vmax]'>
                      <div className='max-lg:text-center text-right'><a className='font-semibold hover:underline hover:underline-offset-3' href={spd.link}>Visit the Page</a></div>
                      <div className='font-semibold text-center lg:py-2'>Description</div>
                      <ul className='pb-4'>
                        {
                          spd.desc.map((data)=>{
                            return(
                              <>
                                <li>{data}</li>
                              </>
                            )
                          })
                        }
                      </ul>
                      <div className='max-lg:text-center text-right'>Skills: {spd.tech}</div>
                    </div>
                  </div>
                  <div className='py-5'></div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default WorkSection