import React, { useEffect, useState } from "react";



interface DropDownProp {
    title:string,
    children:React.ReactNode

}
const DropDownMenu = ({title,children}:DropDownProp) => {

    const [isOpen,setIsOpen] = useState(false)
    console.log(isOpen)
   

    
  return (
    <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className="dropdown-container">
        <span  className="dropdown-title">{title}</span>
        <div className={`dropdown-options  ${isOpen ? 'dp-open': 'dp-close'}`}>
           {children}
        </div>
    </div>
  )
}

export default DropDownMenu