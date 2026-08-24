import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
        <div className='absolute h-full w-full top-0 left-0 p-6 flex flex-col justify-between '>
            <h2 className='bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-lg text-shadow-2xs text-white mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illum voluptas a dolor quos quod?</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white font-normal px-8 py-2 rounded-full '>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' text-white font-normal px-3 py-2 rounded-full '><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent