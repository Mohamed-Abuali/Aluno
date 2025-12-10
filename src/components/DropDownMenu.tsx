import { useEffect, useState } from "react";



interface DropDownProp {
    title:string,
    options:string[]

}
const DropDownMenu = ({title,options}:DropDownProp) => {

    const [isOpen,setIsOpen] = useState(false)
    console.log(isOpen)
   

    
  return (
    <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className="dropdown-container">
        <span  className="dropdown-title">{title}</span>
        <div className={`dropdown-options  ${isOpen ? 'dp-open': 'dp-close'}`}>
            {options.map((o,i) => (
                <span key={i}>{o}</span>
            ))}
        </div>
    </div>
  )
}

export default DropDownMenu