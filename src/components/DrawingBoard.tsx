import { useEffect, useRef, useState,useCallback } from 'react'
import {useChangeTool}  from '../../store/toolStore'
import {useChangeColor}  from '../../store/colorStore'
interface toolProps {
    tool:string,
    ctx:any,
    x:number,
    y:number,
}




const DrawingBoard = () => {

    const toolName = useChangeTool((state) => state.tool)
    const color = useChangeColor((state) => state.color)


    const canvasRef = useRef(null)
    const [drawing,setDrawing] = useState(false)
    const coordiRef = useRef({x:0,y:0})
    
    //const myCanvas = document.getElementById('myCanvas')
    const useTool = ({tool,ctx,x,y}:toolProps) => {
        switch(tool){
            case "Brush":
            ctx.beginPath()
            ctx.moveTo(x,y)
            ctx.lineTo(x,y)
                break;
            case "Paint Bucket":
                ctx.fillStyle = 'black';
                break;
            default:
                break;    
        }
    }



    const getCanvesCoordinates = useCallback((e:MouseEvent) => {
        const canvas = canvasRef.current
        if(!canvas) return {x:0,y:0};
        const rest  =  canvas.getBoundingClientRect();
        return {
            x: e.clientX - rest.left, 
            y: e.clientY - rest.top
        }
    },[])


        console.log(toolName)

        //handles when the maouse is clicked on button down
        const handleMouseDown = useCallback((e:MouseEvent) => {
           // setIsDrawing(true);
           
           const canvas = canvasRef.current
            if(!canvas) return;
            const ctx = canvas.getContext('2d')
            if(!ctx) return;
            if(drawing) return;
          setDrawing(true)
           //console.log("mouse Down",isDrawing)
            const {x,y} = getCanvesCoordinates(e);
            coordiRef.current = {x,y}
            // if(toolName.includes("Brush")){
            //     console.log("brush start")
            // ctx.beginPath()
            // ctx.moveTo(x,y)
            // ctx.lineTo(x,y)
            // }
            useTool({tool:toolName,ctx,x,y})

        },[getCanvesCoordinates,toolName])

        // handles when the mouse is moving inside  the canvas
        const handleMouseMove = useCallback((e:MouseEvent) => {

            const canvas = canvasRef.current
            if(!canvas) return;
            const ctx = canvas.getContext('2d')
            if(!ctx) return;
            if(!drawing) return;
            const {x,y} =  getCanvesCoordinates(e);
            //console.log(drawing)
            if(toolName === "Brush"){
                console.log("brush on",toolName)
            ctx.lineTo(x,y)
            ctx.stroke()
            }
            coordiRef.current = {x,y}

        },[drawing,getCanvesCoordinates,toolName])



        //Handle when the mouse button is up
        const handleMouseUp = useCallback(() => {
            //if(!isDrawing) return;
//setIsDrawing(false);
            setDrawing(false)
            const canvas = canvasRef.current
            if(!canvas) return;
            const ctx = canvas.getContext('2d')
            if(!ctx) return;
            if(!drawing) return;
            
            ctx.closePath()
            
            //console.log("mouse Up",isDrawing)
            
        },[drawing,toolName])



        //Hnadle when the mouse leaves the canves
        const handleMouseLeave = useCallback(() => {
            if(!drawing) return;
            const canvas = canvasRef.current
            if(!canvas) return;
            const ctx = canvas.getContext('2d')
            if(!ctx) return;
            //setIsDrawing(false);
            setDrawing(false)
            ctx.closePath()
        },[drawing,toolName])    




        useEffect(() => {
            const canvas = canvasRef.current
            if(!canvas) return;
            const ctx = canvas.getContext('2d')
            if(!ctx) return;
            ctx.lineWidth = 5; 
            ctx.lineCap = 'square';
            ctx.lineJoin = 'square';
            ctx.strokeStyle = color;
            // const img = new Image()
            // img.onload = () => {
            //     ctx.drawImage(img,0,0)
            // }
            // img.src = image;
            
            //ctx.fillStyle = "black"

           
           
            canvas.addEventListener('mousedown',handleMouseDown)
            canvas.addEventListener('mousemove',handleMouseMove)
            canvas.addEventListener('mouseup',handleMouseUp)
            canvas.addEventListener('mouseleave',handleMouseLeave)

            return () => {
            canvas.removeEventListener('mousedown',handleMouseDown)
            canvas.removeEventListener('mousemove',handleMouseMove)
            canvas.removeEventListener('mouseup',handleMouseUp)
            canvas.removeEventListener('mouseleave',handleMouseLeave)
            }
        },[handleMouseDown,handleMouseMove,handleMouseUp,handleMouseLeave,toolName])
    
    
 

    
  return (
    <canvas ref={canvasRef} id='myCanvas' width={1920} height={1080} >

    </canvas>
  )
}

export default DrawingBoard