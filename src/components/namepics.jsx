import React, { Suspense, lazy } from 'react'

const Details = lazy(() => import('./details'));

function namepics() {
  return (
    <div className='portrait:min-h-[81vh] landscape:min-h-[91vh] text-[#0A7029] flex justify-around items-center portrait:flex-col-reverse portrait:justify-around bg-gradient-to-b from-[#DBE8D8] from-30% to-[#C8DF52]'>
    <Suspense fallback={<div className='bg-transparent font-[Kalam] font-bold text-[3vmax]'>Loading....</div>}>
      <Details/>
    </Suspense>
    </div>
  )
}

export default namepics