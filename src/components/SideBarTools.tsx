import {toolBar} from '../../data/toolBar'
import {useChangeTool}  from '../../store/toolStore'
const SideBarTools = () => {

    const changeTool = useChangeTool((state) => state.change)
  return (
    <div className='sideBarToolContainer'>
        
        {toolBar.map((e,i) => (
            <span key={i} onClick={() => changeTool(e.name)} className='icon'><e.icon/></span>
        ))}
      
    </div>
  )
}

export default SideBarTools