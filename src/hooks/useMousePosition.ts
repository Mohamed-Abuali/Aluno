import { useState,useEffect } from "react";

interface mousePos {
    x:number,
    y:number
}

const useMousePosition = () => { 
    const [mousePosition,setMousePosition] = useState<mousePos>({x:0,y:0})

    useEffect(() => {
        const updateMousePosition = (ev:MouseEvent) => {
            setMousePosition({
                x:ev.clientX,
                y:ev.clientY
            })

            window.addEventListener("mousemove",updateMousePosition)

            return ()=> {
                            window.addEventListener("mousemove",updateMousePosition)

            }
        }
    },[])
    return mousePosition;
}
export default useMousePosition;