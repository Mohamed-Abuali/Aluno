import {create} from 'zustand'

type ToolsProp = {
    tool:string;
}
type ToolChange = {
    change:(tool:string) => void
}

export const useChangeTool = create<ToolsProp & ToolChange>((set) => ({
    tool:"",
    change:(tool) =>set(() => ({tool:tool}))
    
}))