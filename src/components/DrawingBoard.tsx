import { useEffect, useRef, useState,useCallback } from 'react'
 import useMousePosition from '../hooks/useMousePosition'

const DrawingBoard = () => {
  const usePos = useMousePosition();
    const canvasRef = useRef(null)
    const [isDrawing,setIsDrawing] = useState(false)
    const coordiRef = useRef({x:0,y:0})
    let drawing = false;
    //const myCanvas = document.getElementById('myCanvas')
   
    const getCanvesCoordinates = useCallback((e:MouseEvent) => {
        const canvas = canvasRef.current
        if(!canvas) return {x:0,y:0};
        const rest  =  canvas.getBoundingClientRect();
        return {
            x: e.clientX - rest.left, 
            y: e.clientY - rest.top
        }
    },[])




        //handles when the maouse is clicked on button down
        const handleMouseDown = useCallback((e:MouseEvent) => {
           // setIsDrawing(true);
           
           const canvas = canvasRef.current
            if(!canvas) return;
            const ctx = canvas.getContext('2d')
            if(!ctx) return;
            if(drawing) return;
          drawing = true
           //console.log("mouse Down",isDrawing)
            const {x,y} = getCanvesCoordinates(e);
            coordiRef.current = {x,y}
            ctx.beginPath()
            ctx.moveTo(x,y)
            ctx.lineTo(x,y)

        },[getCanvesCoordinates])

        // handles when the mouse is moving inside  the canvas
        const handleMouseMove = useCallback((e:MouseEvent) => {

            const canvas = canvasRef.current
            if(!canvas) return;
            const ctx = canvas.getContext('2d')
            if(!ctx) return;
            if(!drawing) return;
            const {x,y} =  getCanvesCoordinates(e);
            //console.log(drawing)
            ctx.lineTo(x,y)
            ctx.stroke()
           coordiRef.current = {x,y}

        },[drawing,getCanvesCoordinates])



        //Handle when the mouse button is up
        const handleMouseUp = useCallback(() => {
            //if(!isDrawing) return;
//setIsDrawing(false);
                drawing = false
const canvas = canvasRef.current
            if(!canvas) return;
            const ctx = canvas.getContext('2d')
            if(!ctx) return;
            if(!drawing) return;
            
            ctx.closePath()
            
            //console.log("mouse Up",isDrawing)
            
        },[drawing])



        //Hnadle when the mouse leaves the canves
        const handleMouseLeave = useCallback(() => {
            if(!isDrawing) return;
            const canvas = canvasRef.current
            if(!canvas) return;
            const ctx = canvas.getContext('2d')
            if(!ctx) return;
            //setIsDrawing(false);
            drawing = false;
            ctx.closePath()
        },[drawing])    




        useEffect(() => {
            const canvas = canvasRef.current
            if(!canvas) return;
            const ctx = canvas.getContext('2d')
            if(!ctx) return;
            ctx.lineWidth = 5; 
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeStyle = 'red';
            
            //ctx.fillStyle = "black"

           
           
            canvas.addEventListener('mousedown',handleMouseDown)
            canvas.addEventListener('mousemove',handleMouseMove)
            canvas.addEventListener('mouseup',handleMouseUp)
            canvas.addEventListener('mouseleave',handleMouseLeave)

            return () => {
            canvas.addEventListener('mousedown',handleMouseDown)
            canvas.addEventListener('mousemove',handleMouseMove)
            canvas.addEventListener('mouseup',handleMouseUp)
            canvas.addEventListener('mouseleave',handleMouseLeave)
            }
        },[handleMouseDown,handleMouseMove,handleMouseUp,handleMouseLeave])
    
    
 

    
  return (
    <canvas ref={canvasRef} id='myCanvas' width={1920} height={1080} >

    </canvas>
  )
}

export default DrawingBoard