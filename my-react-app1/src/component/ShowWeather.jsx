import { IoIosUmbrella } from "react-icons/io";

// function ShowWeather(){
//     return <div>
//         123
//     </div>
// }
// export default ShowWeather

// ↓可改寫如下

export default function ShowWeather({ city }) {
    // console.log(weatherList)
    return (

            <div className="date">
                {
                    city.weatherElement[0].time.map((time, index) => {
                        return (
                            <div className="period" key={index}>
                                {/* 日期*/}
                                <p className="pDate">
                                {new Date(time.startTime).toLocaleString(undefined, { day: 'numeric' })}
                                </p>
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
                                <p>
                                    <img src={`./weatherIcon/${time.parameter.parameterName}.svg`} alt="" />
                                </p>
                                {/* 天氣圖名稱 */}
                                <p>
                                    {time.parameter.parameterName}
                                </p>
                                {/* 降雨機率 */}
                                <p className="pRain"><IoIosUmbrella />
                                    {
                                        city.weatherElement[4].time[index].parameter.parameterName
                                    }%</p>
                            </div>
                        )
                    })
                }
            </div>
    )
}