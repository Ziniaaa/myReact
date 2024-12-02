import { useEffect } from "react"
import axios from 'axios';
import './App.css'


function App() {

  useEffect(() => {
    (async () => {
      const data = await axios.get('./F-C0032-001.json');
      const { location } = data.data.cwaopendata.dataset;
      console.log(location);

    })



  }, [])


  return (
    <>
      <h2>36小時天氣預報</h2>

      <section>
        <div className="city">
          <h3>臺北市</h3>
          <div className="date">
            <div className="period">
            <p>2日</p>
            <p>上午6:00<br />~<br />下午6:00</p>
            <p><img src="./weatherIcon/晴時多雲.svg" alt="" /></p>
            <p>晴時多雨</p>
            <p><span>☂</span>10%</p>
            </div>
          
                <div className="period">
            <p>2日</p>
            <p>下午6:00<br />~<br />上午6:00</p>
            <p><img src="./weatherIcon/晴時多雲.svg" alt="" /></p>
            <p>晴時多雨</p>
            <p><span>icon</span>10%</p>
            </div>
          
          <div className="period">
            <p>3日</p>
            <p>上午6:00<br />~<br />下午6:00</p>
            <p><img src="./weatherIcon/晴時多雲.svg" alt="" /></p>
            <p>晴時多雨</p>
            <p><span>icon</span>10%</p>
            </div>
          </div>
          
        </div>
        <div className="city">
          <h3>新北市</h3>
          <div className="date">
            <div className="period">
            <p>2日</p>
            <p>上午6:00<br />~<br />下午6:00</p>
            <p><img src="./weatherIcon/晴時多雲.svg" alt="" /></p>
            <p>晴時多雨</p>
            <p><span>icon</span>10%</p>
            </div>
          
                <div className="period">
            <p>2日</p>
            <p>下午6:00<br />~<br />上午6:00</p>
            <p><img src="./weatherIcon/晴時多雲.svg" alt="" /></p>
            <p>晴時多雨</p>
            <p><span>icon</span>10%</p>
            </div>
          
          <div className="period">
            <p>3日</p>
            <p>上午6:00<br />~<br />下午6:00</p>
            <p><img src="./weatherIcon/晴時多雲.svg" alt="" /></p>
            <p>晴時多雨</p>
            <p><span>icon</span>10%</p>
            </div>
          </div>
          
        </div>

      </section>

    </>
  )
}

export default App