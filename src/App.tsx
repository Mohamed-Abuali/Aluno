import "./App.css";
import ColorTable from "./components/ColorTable";
import DrawingBoard from "./components/DrawingBoard";
import NavBar from "./components/NavBar";
import SideBarTools from "./components/SideBarTools";


function App() {




  return (
    <main className="container">
      <NavBar/>
      <DrawingBoard/>
      <SideBarTools/>
      <ColorTable/>
    </main>
  );
}

export default App;
