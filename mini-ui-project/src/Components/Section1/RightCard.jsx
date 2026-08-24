import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 relative overflow-hidden w-70 bg-red-500 rounded-4xl'>
        <img className='h-full w-full object-cover object-center' src={props.img} alt="" />
        <RightCardContent id={props.id} color={props.color} tag={props.tag}/>
    </div>
  )
}

export default RightCard