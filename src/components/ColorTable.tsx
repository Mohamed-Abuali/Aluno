import React from 'react'
import colors from '../../data/colorTable'
import {useChangeColor}  from '../../store/colorStore'

const ColorTable = () => {
    const changeColor = useChangeColor((state) => state.changeColor)
    const color = useChangeColor((state) => state.color)
    const [isOpen,setIsOpen] = React.useState(false)
  return (
    <div className='colortable-container'>
        <span style={{backgroundColor:color}} onClick={() => setIsOpen(prev => prev = !prev)} className='color-selected-container'>
            
        </span>
        <div className={`color-table-list ${isOpen ? ' color-open' : ' color-close'}`}>
            {colors.map((c,i) => (
                 <span onClick={() => {
                    changeColor(c.color)
                    setIsOpen(false)
                 }} key={i} style={{backgroundColor:c.color}} className='color-list-item'/>
            ))}
        </div>
    </div>
  )
}

export default ColorTable