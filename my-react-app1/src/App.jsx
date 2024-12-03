import { useEffect } from "react"
import axios from 'axios';
import './App.css'
import { IoIosUmbrella } from "react-icons/io";


function App() {

  useEffect(() => {
    (async () => {
      // const data = await axios.get('./F-C0032-001.json');

      // json的連結必須是
      const data = await axios.get('https://ziniaaa.github.io/myReact/json/F-C0032-001.json');
      const { location } = data.data.cwaopendata.dataset;
      const options = { hour: 'numeric', minute: 'numeric' };
      console.log(location);

    })



  }, [])


  return (
    <>

      <section className="wrap">
        <h2>36小時天氣預報</h2>
        <div className="city2">
          <div className="city">
            <h3>臺北市</h3>
            <div className="date">
              <div className="period">
                <p className="pDate">2日</p>
                <p>上午6:00<br />~<br />下午6:00</p>
                <p><img src="./weatherIcon/晴時多雲.svg" alt="" /></p>
                <p>晴時多雨</p>
                <p className="pRain"><IoIosUmbrella />10%</p>
              </div>

              <div className="period">
                <p className="pDate">2日</p>
                <p>下午6:00<br />~<br />上午6:00</p>
                <p><img src="./weatherIcon/晴時多雲.svg" alt="" /></p>
                <p>晴時多雨</p>
                <p className="pRain"><IoIosUmbrella />10%</p>
              </div>

              <div className="period">
                <p className="pDate">3日</p>
                <p>上午6:00<br />~<br />下午6:00</p>
                <p><img src="./weatherIcon/晴時多雲.svg" alt="" /></p>
                <p>晴時多雨</p>
                <p className="pRain"><IoIosUmbrella />10%</p>
              </div>
            </div>

          </div>
          <div className="city">
            <h3>新北市</h3>
            <div className="date">
              <div className="period">
                <p className="pDate">2日</p>
                <p>上午6:00<br />~<br />下午6:00</p>
                <p><img src="./weatherIcon/晴時多雲.svg" alt="" /></p>
                <p>晴時多雨</p>
                <p className="pRain"><IoIosUmbrella />10%</p>
              </div>

              <div className="period">
                <p className="pDate">2日</p>
                <p>下午6:00<br />~<br />上午6:00</p>
                <p><img src="./weatherIcon/晴時多雲.svg" alt="" /></p>
                <p>晴時多雨</p>
                <p className="pRain"><IoIosUmbrella />10%</p>
              </div>

              <div className="period">
                <p className="pDate">3日</p>
                <p>上午6:00<br />~<br />下午6:00</p>
                <p><img src="./weatherIcon/晴時多雲.svg" alt="" /></p>
                <p>晴時多雨</p>
                <p className="pRain"><IoIosUmbrella />10%</p>
              </div>
            </div>
          </div>
        </div>

      </section>

    </>
  )
}

export default App