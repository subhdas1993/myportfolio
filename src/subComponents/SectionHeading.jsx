import React from 'react'

function SectionHeading({ secnum, sechead }) {
  return (
    <>
      <div className='relative'>
        <div className='relative text-gray-300 text-[20svh]'>{secnum}</div>
        <div className='absolute text-[7svh] top-1/3 left-1/5 lg:left-1/23'>{sechead}</div>
      </div>
    </>
  )
}

export default SectionHeading