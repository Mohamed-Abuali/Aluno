import React from 'react'
import {toolBar} from '../../data/toolBar'
const SideBarTools = () => {
  return (
    <div className='sideBarToolContainer'>
        
        {toolBar.map((e,i) => (
            <span key={i} className='icon'><e.icon/></span>
        ))}
      
    </div>
  )
}

export default SideBarTools