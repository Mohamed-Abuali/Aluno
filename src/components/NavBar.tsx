
import { LuMoonStar } from "react-icons/lu";
import DropDownMenu from "./DropDownMenu";

const NavBar = () => {
  
  const handleImageSave = () => {
    const canvas = document.getElementById("myCanvas")
    const link  = document.createElement("a");
    console.log(canvas)
    console.log(link)
    const image = canvas ? canvas.toDataURL("image/png",0.95) : "";
    // window.open(image)
      const base64 = image.split(",")[1];
       window.__TAURI__.invoke("save_image", { base64 });

  }


  return (
    <div className='navbar-container'>
        <nav>
            <div className="logo-wrapper">
            <LuMoonStar className="logo"/>
            <p className="logo">Aluno</p>
            </div>
            <ul>
                <li>
                   <DropDownMenu title="File">
                      <span onClick={handleImageSave}>Save</span>
                    </DropDownMenu>
                </li>
                <li>edit</li>
                <li>about</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar