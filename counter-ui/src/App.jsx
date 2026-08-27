import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const [num, setNum] = useState(0)
  function increaseNum(){
    setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)
  }
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-gray-200'>
      <div className='flex flex-col gap-10 items-center w-80 bg-white h-80 pt-16 rounded-3xl'>
        <h4 className='uppercase bg-gray-300 rounded-full py-2 px-6 font-semibold'>Current Count</h4>
        <h1 className='text-8xl font-bold'>{num}</h1>
      </div>
      <div className='mt-12 flex gap-12'>
          <div className='flex flex-col justify-center items-center'>
              <div className='bg-red-500 w-32 h-32 flex flex-col justify-center items-center rounded-3xl'>
                <button onClick={decreaseNum} className='text-white font-bold text-4xl w-18 h-18 bg-red-400 rounded-full'><i className="ri-subtract-line"></i></button>
                <h6 className='text-white font-bold '>Decrease</h6>
              </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
              <div className='bg-green-500 w-32 h-32 flex flex-col justify-center items-center rounded-3xl'>
                <button onClick={increaseNum} className='text-white font-bold text-4xl w-18 h-18 bg-green-400 rounded-full'><i class="ri-add-line"></i></button>
                <h6 className='text-white font-bold '>Increase</h6>
              </div>
          </div>
      </div>
    </div>
  )
}

export default App