import { useEffect } from "react"
import axios from 'axios';
import './App.css'
import { IoIosUmbrella } from "react-icons/io";
import ShowCity from "./ShowCity";


function App() {

  useEffect(() => {
    (async () => {
      // json本地端要在web-server伺服器下才能執行
      // const data = await axios.get('./F-C0032-001.json');

      // json的連結必須是公開網址下的來源
      const data = await axios.get('https://ziniaaa.github.io/myReact/json/F-C0032-001.json');
      // console.log(data);
      const { location } = data.data.cwaopendata.dataset;
      // console.log(location);

      // locatuinName → 縣市名稱 
      // elementName → Wx → 天氣概況
      // elementName → PoP → 下雨機率

      function showCity(){
      location.map((city) => {
        return <div key={city.locationName}>{city.locationName}</div>
      })}

    })()
  }, [])


  return (
    <>
      <section className="wrap">
        <h2>36小時天氣預報</h2>
        <ShowCity/>


      </section>

    </>
  )
}

export default App