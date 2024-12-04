import { Routes,Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/HOME";
import About from "./pages/ABOUT";
import News from "./pages/NEWS";


export default function App() {

  return (
    <div className="wrap">
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/news" element={<News/>}></Route>

      </Routes>




    </div>




  )

}