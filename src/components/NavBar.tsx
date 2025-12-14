
import { LuMoonStar } from "react-icons/lu";
import DropDownMenu from "./DropDownMenu";

const NavBar = () => {
  const canvas = document.getElementById("myCanvas")
  console.log(canvas)
  const handleImageSave = () => {
    const link  = document.createElement("a");
    console.log(link)
    link.href = canvas ? canvas.toDataURL("image/jpeg") : "";
    link.download = "aluno.jpeg"
    link.click()

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