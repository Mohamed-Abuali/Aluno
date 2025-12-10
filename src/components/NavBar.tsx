
import { LuMoonStar } from "react-icons/lu";
import DropDownMenu from "./DropDownMenu";

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <nav>
            <div className="logo-wrapper">
            <LuMoonStar className="logo"/>
            <p className="logo">Aluno</p>
            </div>
            <ul>
                <li>
                   <DropDownMenu title="File" options={['New File','Open File','Save File']}/>
                </li>
                <li>edit</li>
                <li>about</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar