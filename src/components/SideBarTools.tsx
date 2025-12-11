import {toolBar} from '../../data/toolBar'
import {useChangeTool}  from '../../store/toolStore'
const SideBarTools = () => {

    const changeTool = useChangeTool((state) => state.change)
    const toolName = useChangeTool((state) => state.tool)
  return (
    <div className='sideBarToolContainer'>
        
        {toolBar.map((e,i) => (
            <span key={i} onClick={() => changeTool(e.name)} className={`icon ${toolName.includes(e.name) && 'color-icon-active'}`}><e.icon/></span>
        ))}
      
    </div>
  )
}

export default SideBarTools