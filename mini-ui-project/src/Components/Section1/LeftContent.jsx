import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='flex flex-col justify-between h-full w-1/3'>
        <HeroText />
        <Arrow />
    </div>
  )
}

export default LeftContent