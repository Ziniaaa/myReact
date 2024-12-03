import { useEffect } from "react"
import axios from 'axios';
import './App.css'
import { IoIosUmbrella } from "react-icons/io";


function App() {

    useEffect(() => {
        (async () => {
            // json本地端要在web-server伺服器下才能執行
            // const data = await axios.get('./F-C0032-001.json');

            // json的連結必須是公開網址下的來源
            const data = await axios.get('https://ziniaaa.github.io/myReact/json/F-C0032-001.json');
            // console.log(data);

            const { location } = data.data.cwaopendata.dataset;
            console.log(location);
            // const options = { hour: 'numeric', minute: 'numeric' };

            // locatuinName → 縣市名稱 
            // elementName → Wx → 天氣概況
            // elementName → PoP → 下雨機率

        })()
    }, [])


    return (
        <>

            <section className="wrap">
                <h2>36小時天氣預報</h2>
                <div className="city2">
                    <div className="city">
                        <h3>{city.locationName}</h3>
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
                <h2>36小時天氣預報</h2>
                <div className="city2">
                    <div className="city">
                        <h3>{city.locationName}</h3>
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