import { useEffect, useRef } from 'react'
// import useMousePosition from '../hooks/useMousePosition'

const DrawingBoard = () => {
  //  const usePos = useMousePosition();
    const canvasRef = useRef(null)
  
    let lastX = 0
    let lastY = 0
    const myCanvas = document.getElementById('myCanvas')

    
    const getCanvesCoordinates =(e:MouseEvent,canvas:any)=> {
        
        const rest  =  canvas.getBoundingClientRect();
        return {
            x: e.clientX - rest.left, 
            y: e.clientY - rest.top
        }
    }



    const draw = (ctx:any,canvas:any) => {
        

        let draw = false;
     
        myCanvas?.addEventListener('mousedown',(e) => {
            draw=true;
            const {x,y} = getCanvesCoordinates(e,canvas);
            lastX = x;
            lastY = y;
            ctx.beginPath()
            ctx.moveTo(lastX,lastY)


        })
        myCanvas?.addEventListener('mousemove',(e)=> {
            if(!draw) return;
            const {x,y} =  getCanvesCoordinates(e,canvas);;
            const currentX= x;
            const currentY = y;
            console.log(currentX,currentY)
            ctx.lineTo(currentX,currentY)
            ctx.stroke()
            if(currentX && currentY){
                [lastX,lastY] =[currentX,currentY]
            }

        })
        myCanvas?.addEventListener('mouseup',() => {
            draw=false;
            ctx.closePath()
        })
    }

 useEffect(() => {
    const canvas = canvasRef.current
    if(!canvas) return;

    const ctx = canvas.getContext('2d')
   // ctx.fillStyle = "black"
    ctx.lineWidth = 5; 
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = 'red';
    draw(ctx,canvas)
 },[draw])
    
    
 

    
  return (
    <canvas ref={canvasRef} id='myCanvas' width={1920} height={1080} >

    </canvas>
  )
}

export default DrawingBoard