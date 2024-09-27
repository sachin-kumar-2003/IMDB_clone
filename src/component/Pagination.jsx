<<<<<<< HEAD
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function Pagination({prevPage,nextPage,pageNo}) {
  return (
    <div className='bg-gray-400 p-4 mt-4 flex justify-center items-center'>
      <div className='px-8' onClick={prevPage}>
        <FaArrowLeft/>
      </div>
      <div className='font-bold'>
      {pageNo}
      </div>
      <div className='px-8' onClick={nextPage}>
        <FaArrowRight/>
      </div>
    </div>
  )
}

=======
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function Pagination({prevPage,nextPage,pageNo}) {
  return (
    <div className='bg-gray-400 p-4 mt-4 flex justify-center items-center'>
      <div className='px-8' onClick={prevPage}>
        <FaArrowLeft/>
      </div>
      <div className='font-bold'>
      {pageNo}
      </div>
      <div className='px-8' onClick={nextPage}>
        <FaArrowRight/>
      </div>
    </div>
  )
}

>>>>>>> 6e386cc8a0552e0071ef4a7fc351f0fa579fd59b
export default Pagination