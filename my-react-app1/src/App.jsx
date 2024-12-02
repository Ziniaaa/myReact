import { useEffect } from "react"
import axios from 'axios';

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
          <h3>台北市</h3>
          <div className="date">
            <p>2日</p>
            <p>上午6:00~下午6:00</p>
            <p><img src="" alt="" /></p>
            <p>晴時多雨</p>
            <p>【icon】10%</p>
          </div>
          
        </div>

      </section>

    </>
  )
}

export default App