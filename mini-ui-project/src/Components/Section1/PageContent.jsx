import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = (props) => {
  return (
    <div className='pb-10 pt-2 py-8 flex items-center gap-10 h-[90vh]'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default PageContent