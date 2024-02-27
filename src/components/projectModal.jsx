import React from 'react'

function projectModal({ setIsModalOpen,setIsModalData, isModalOpen, isModalData }) {
  
  return (
    <>
      {isModalOpen && isModalData &&
        <>          
          <div
            className="flex justify-center items-center overflow-x-hidden overflow-y-auto portrait:overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl portrait:h-[80vh] portrait:my-0 portrait:mx-[4vh] portrait:overflow-y-scroll">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#DBE8D8] outline-none focus:outline-none text-[#0A7029]">
                {/*header*/}
                <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t portrait:p-2">
                  <h3 className="text-3xl font-bold portrait:text-2xl">
                  {isModalData[0]}
                  </h3>                  
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto portrait:p-2">
                  <p className="my-4 font-regular text-lg leading-relaxed portrait:text-md">
                    <a href={`${isModalData[1]}`} className='hover:underline' target='_blank'>{isModalData[1]}</a>
                  </p>
                  <p className="my-4 font-regular text-lg leading-relaxed portrait:text-md"> 
                    {isModalData[2]}
                  </p>
                  <p className="my-4 font-regular text-lg leading-relaxed portrait:text-md">
                    <span className='font-bold'>Technology used: </span>{isModalData[3]}
                  </p>
                  <p className="my-4 font-regular text-lg leading-relaxed portrait:text-md">
                  <span className='font-bold'>NPM used: </span>{isModalData[4]}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-[#0A7029] text-[#FEDE00] active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {setIsModalOpen(false);setIsModalData('')}}
                  >
                    close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>}
    </>
  )
}

export default projectModal