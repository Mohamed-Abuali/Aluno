import "./App.css";
import DrawingBoard from "./components/DrawingBoard";
import NavBar from "./components/NavBar";
import SideBarTools from "./components/SideBarTools";


function App() {




  return (
    <main className="container">
      <NavBar/>
      <DrawingBoard/>
      <SideBarTools/>
    </main>
  );
}

export default App;
