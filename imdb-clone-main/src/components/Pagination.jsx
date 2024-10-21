import React from 'react'

function Pagination({handlePrev, pageNo, handleNext}) {
  return (
    <div className='bg-gray-400 p-1 mt-6 flex justify-center rounded-xl hover:cursor-pointer'>
        <div onClick={handlePrev} className='px-4'> <i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{pageNo}</div>
        <div onClick={handleNext} className='px-4'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination