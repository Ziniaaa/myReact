import { useState } from "react"

function App() {
  // 使用者名稱
  const [inputUserName, setInputUserName] = useState("我是文字方塊");
  // 縣市名稱
  const [selCity, setSelCity] = useState("");
  // 建立陣列方法
  const arrCity = ['台北市', '桃園市', '新北市'];


  return (                                                                                                       
    <>
      <h1>React-表單</h1>
      <hr />
      
      {/* input */}
      <label htmlFor="username">使用者名稱</label>
      <input type="text" id="username"
        value={inputUserName}
        onChange={(e) => {
          // console.log(`更改前${inputUserName}`)
          setInputUserName(e.target.value);
          // console.log(`更改後${inputUserName}`)
        }}
      />{inputUserName}

      <br />
      
      {/* select */}
      <label htmlFor="city">縣市名</label>
      <select name="" id="city"
        value={selCity}
        onChange={(e) => {
          setSelCity(e.target.value);
        }}
      >


        {/* 逐行寫法 */}
        {/* <option value="台北市" 台北市></option>
        <option value="桃園市" 桃園市></option>
        <option value="新北市" 新北市></option>
        <option value="台中市" 台中市></option>
        <option value="台南市" 台南市></option>
        <option value="高雄市" 高雄市></option> */}

        {/* 讀取陣列寫法※下為JS陣列寫法，故在JSX return中需要包大括號中撰寫 */}
        {/* disabled → 無法使用(失效) */}
        <option value="" disabled>請選擇</option>
        {
          arrCity.map((city) => {
            return <option value={city} key={city}>{city}</option>
          }
          )}

      </select >{selCity}
    </>
  )
}
export default App