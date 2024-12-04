import { useEffect, useState } from "react"
import axios from 'axios';
import './App.css'
import { IoIosUmbrella } from "react-icons/io";



function App() {
  const [weatherList, setWeatherList] = useState([]);


  useEffect(() => {
    (async () => {
      // json本地端要在web-server伺服器下才能執行
      // const data = await axios.get('./F-C0032-001.json');

      // json的連結必須是公開網址下的來源
      const data = await axios.get('https://ziniaaa.github.io/myReact/json/F-C0032-001.json');
      // console.log(data);
      const { location } = data.data.cwaopendata.dataset;
      console.log(location);
      setWeatherList(location);


    })()
  }, [])


  return (
    // locatuinName → 縣市名稱 
    // elementName → Wx → 天氣概況
    // elementName → PoP → 下雨機率
    <>
      <section className="wrap">
        <h2>36小時天氣預報</h2>
        <div className="container">
          {
            weatherList.map((city) => {
              return (
                <div className="item" key={city.locationName}>
                  <h3>{city.locationName}</h3>
                  <div className="date">
                    {
                      city.weatherElement[0].time.map((time, index) => {
                        return (
                          <div className="period" key={index}>
                            {/* 日期*/}
                            <p className="pDate">
                              {
                                new Date(time.startTime).toLocaleString(undefined, { day: 'numeric' })
                              }</p>
                            {/* 時間 */}
                            <p>
                              {
                                new Date(time.startTime).toLocaleString(undefined, { hour: 'numeric', minute: 'numeric' })
                              }
                              <br />~<br />
                              {
                                new Date(time.endTime).toLocaleString(undefined, { hour: 'numeric', minute: 'numeric' })
                              }
                            </p>
                            {/* 天氣圖 */}
                            <p><img src={`./weatherIcon/${time.parameter.parameterName}.svg`} alt="" /></p>
                            {/* 天氣圖名稱 */}
                            <p>
                              {time.parameter.parameterName}
                            </p>
                            {/* 下雨機率 */}
                            <p className="pRain"><IoIosUmbrella />10%</p>
                          </div>
                        )
                      })
                    }


                  </div>


                </div>
              )
            })
          }

        </div>
      </section>

    </>
  )
}

export default App