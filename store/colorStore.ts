import {create} from 'zustand'

type Color = {
    color:string;
}

type ColorChange ={
    changeColor:(color:string) => void;
}

export const useChangeColor = create<Color & ColorChange>((set) => ({
    color:"",
    changeColor:(color) => set(() => ({color:color}))

}))