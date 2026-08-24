import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {

  return (
    <div id='right' className='h-full p-6 w-2/3 flex flex-nowrap gap-6 overflow-x-auto rounded-4xl'>
        {props.users.map(function(elem, idx){
            return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} />
        })}
    </div>
  )
}

export default RightContent