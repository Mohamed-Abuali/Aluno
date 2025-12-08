import { useEffect, useRef, useState,useCallback } from 'react'
 import useMousePosition from '../hooks/useMousePosition'

const DrawingBoard = () => {
  const usePos = useMousePosition();
    const canvasRef = useRef(null)
    const [isDrawing,setIsDrawing] = useState(false)
    const coordiRef = useRef({x:0,y:0})
   
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
           const canvas = canvasRef.current
            if(!canvas) return;
            const ctx = canvas.getContext('2d')
            if(!ctx) return;
            if(isDrawing) return;
          
           console.log("mouse Down",isDrawing)
            const {x,y} = getCanvesCoordinates(e);
            coordiRef.current = {x,y}
            ctx.beginPath()
            ctx.moveTo(x,y)
            setIsDrawing(true);

        },[getCanvesCoordinates])

        // handles when the mouse is moving inside  the canvas
        const handleMouseMove = useCallback((e:MouseEvent) => {

            const canvas = canvasRef.current
            if(!canvas) return;
            const ctx = canvas.getContext('2d')
            if(!ctx) return;
            if(!isDrawing) return;
            const {x,y} =  getCanvesCoordinates(e);
            console.log(isDrawing)
            ctx.lineTo(x,y)
            ctx.stroke()
           coordiRef.current = {x,y}

        },[isDrawing,getCanvesCoordinates])



        //Handle when the mouse button is up
        const handleMouseUp = useCallback(() => {
            //if(!isDrawing) return;
            
            const canvas = canvasRef.current
            if(!canvas) return;
            const ctx = canvas.getContext('2d')
            if(!ctx) return;
            if(!isDrawing) return;
            
            ctx.closePath()
            setIsDrawing(false);
            console.log("mouse Up",isDrawing)
            
        },[isDrawing])



        //Hnadle when the mouse leaves the canves
        const handleMouseLeave = useCallback(() => {
            if(!isDrawing) return;
            const canvas = canvasRef.current
            if(!canvas) return;
            const ctx = canvas.getContext('2d')
            if(!ctx) return;
            setIsDrawing(false);
            ctx.closePath()
        },[isDrawing])    




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