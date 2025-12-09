import { LuPencil, LuBrush, LuEraser, LuPaintBucket, LuSquare, LuCircle, LuTriangle, LuSlash, LuMousePointer, LuType, LuMove, LuZoomIn, LuZoomOut } from "react-icons/lu";

export const toolBar = [
  { icon: LuPencil, name: "Pencil", description: "Freehand drawing with precise, thin strokes." },
  { icon: LuBrush, name: "Brush", description: "Freehand painting with adjustable thickness and softer edges." },
 { icon: LuEraser, name: "Eraser", description: "Remove parts of existing strokes or shapes." },
  { icon: LuPaintBucket, name: "Paint Bucket", description: "Fill a contiguous area with the selected color." },
  { icon: LuSquare, name: "Rectangle", description: "Draw axis-aligned rectangles and squares." },
   { icon: LuCircle, name: "Circle", description: "Draw circles or ellipses by dragging on the canvas." },
   { icon: LuTriangle, name: "Triangle", description: "Draw triangle shapes with straight edges." },
   { icon: LuSlash, name: "Line", description: "Draw straight line segments between two points." },
  { icon: LuType, name: "Text", description: "Insert and edit text labels on the canvas." },
  { icon: LuMousePointer, name: "Select", description: "Select, move, and transform existing objects." },
   { icon: LuMove, name: "Move", description: "Pan the canvas to navigate around your drawing." },
 { icon: LuZoomIn, name: "Zoom In", description: "Zoom in to focus on finer details." },
  { icon: LuZoomOut, name: "Zoom Out", description: "Zoom out to see more of the canvas." }
];
