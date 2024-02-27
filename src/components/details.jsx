import React from 'react'

function details() {
  return (
    <>
      <div className='portrait:overflow-hidden portrait:pb-3'>
        <h1 className='font-[Kalam] font-bold text-[6vmax] portrait:text-center animate-animPopoutin'>Subhashis Das</h1>
        <h2 className='font-[Kalam] font-normal text-[3vmax] portrait:text-center portrait:mx-10 animate-animPopoutin'>ForntEnd / REACT / <br /> FullStack / MERN Stack Developer</h2>
      </div>
      <div className='bg-transparent landscape:w-1/3 portrait:w-2/3 aspect-square overflow-hidden relative'>
        {/* bg-[#0A702990] rounded-full*/}
        <div className=' bg-[url("../mypics.png")] bg-top bg-cover bg-no-repeat w-full h-full scale-100 hover:scale-110 transition-all duration-300 ease-linear'>
          {/* rounded-full */}
        </div>
      </div>
    </>
  )
}

export default details