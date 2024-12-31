import { Routes,Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/HOME";
import About from "./pages/ABOUT";
import News from "./pages/NEWS";
import LOGIN from "./pages/LOGIN";
import USER from "./pages/USER"



export default function App() {

  return (
    <div className="wrap">
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/login" element={<LOGIN/>}></Route>
        <Route path="/user" element={<USER/>}></Route>

      </Routes>




    </div>




  )

}