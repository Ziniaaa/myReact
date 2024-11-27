import { useState } from "react"

function App() {
  // 使用者名稱
  const [inputUserName, setInputUserName] = useState("我是文字方塊");

  // 縣市名稱
  const [selCity, setSelCity] = useState("");
  // 建立陣列方法
  const arrCity = ['台北市', '桃園市', '新北市'];

  // 閱讀確認
  const [check, setCheck] = useState(false);

  // 複選：多個核取方塊(：用陣列方式存放)
  const [chkList, setChkList] = useState([]);
  const arrList = ['HTML', 'CSS', 'JS', 'React'];

  // 建立函式處理被勾選的項目
  const handleChkList = (e) => {
    // console.log(e.target.value);
    // 使用其餘運算子保留已被勾選的項目，再加上目前勾選的項目
    // ↓檢查是否被勾選
    if (e.target.checked) {
      // 是 → 原本+新的
      setChkList([...chkList, e.target.value]);
    } else {
      // 否 → 從原本被勾選的項目中，拿掉現在不要的(filter)
      setChkList(
        chkList.filter((list) => {
          return list !== e.target.value
        })
      )

    }
  }

  // 選項按鈕
  const [isCar, setIsCar] = useState('n');

  // 喜好統計
  const [q1Ans, setQ1Ans] = useState('');
  const [q2Ans, setQ2Ans] = useState('');

  // 統計次數
  const [ans1Count, setAns1Count] = useState(0);
  const [ans2Count, setAns2Count] = useState(0);
  const [ans3Count, setAns3Count] = useState(0);

  

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
      <br />

      {/* 單一核取方塊 */}
      <label htmlFor="isCheck">閱讀確認</label>
      <input type="checkbox" id="isCheck"
        value={check}
        onChange={(e) => {
          // 處理勾選值的變化
          setCheck(e.target.checked);
        }} />{check.toString()}
      <br />

      {/* 複選：多個核取方塊 */}
      {
        arrList.map((list) => {
          return <div key={list}>
            <input type="checkbox" id={list} name="like"
              value={list}
              onChange={handleChkList}
            />
            <label htmlFor={list}>{list}</label>
          </div>
        })
      }
      {/* ↑用陣列簡化 */}
      {/* 
      <input type="checkbox" id="chkList1" name="like" value="HTML" onChange={handleChkList} />
      <label htmlFor="chkList1">HTML</label>
      <input type="checkbox" id="chkList2" name="like" value="CSS" onChange={handleChkList} />
      <label htmlFor="chkList2">CSS</label>
      <input type="checkbox" id="chkList3" name="like" value="JS" onChange={handleChkList} />
      <label htmlFor="chkList3">JS</label> 
      */}
      <br />
      {chkList}

      {/* 選項按鈕 */}
      汽車駕照<span id="car">{isCar}</span>
      <input type="radio" name="car" value="有" id="y" onChange={(e) => {
        setIsCar('y')
      }} />
      <label htmlFor="y">有</label>
      <input type="radio" name="car" value="無" id="n" onChange={(e) => {
        setIsCar('n')
      }} />
      <label htmlFor="n">無</label>

      <hr />
      1.選擇喜歡的飲料
      <input type="radio" name="Q1" value="咖啡" id="Q1-1" onChange={(e) => {
        setQ1Ans(e.target.value)
      }} />
      <label htmlFor="Q1-1">咖啡</label>
      <input type="radio" name="Q1" value="奶茶" id="Q1-2" onChange={(e) => {
        setQ1Ans(e.target.value)
      }} />
      <label htmlFor="Q1-2">奶茶</label>
      <input type="radio" name="Q1" value="青汁" id="Q1-3" onChange={(e) => {
        setQ1Ans(e.target.value)
      }} />
      <label htmlFor="Q1-3">青汁</label>
      <br />
      現所選擇的飲料是：{q1Ans}
      <br />
      2.選擇喜歡的甜點
      <input type="radio" name="Q2" value="蛋糕" id="Q2-1" onChange={(e) => {
        setQ2Ans(e.target.value)
      }} />
      <label htmlFor="Q2-1">蛋糕</label>
      <input type="radio" name="Q2" value="餅乾" id="Q2-2" onChange={(e) => {
        setQ2Ans(e.target.value)
      }} />
      <label htmlFor="Q2-2">餅乾</label>
      <input type="radio" name="Q2" value="布丁" id="Q2-3" onChange={(e) => {
        setQ2Ans(e.target.value)
      }} />
      <label htmlFor="Q2-3">布丁</label>
      <br />
      現所選擇的甜點是：{q2Ans}
      <br />
      <br />
      <button onClick={() => {
        // 將所有次數歸零
        setAns1Count(0);
        setAns2Count(0);
        setAns3Count(0);


        // 統計次數
        // 第一題
        const q1a = document.getElementById('Q1-1');
        if (q1a.checked) {
          setAns1Count(ans1Count + 1);
        }
        const q1b = document.getElementById('Q1-2');
        if (q1b.checked) {
          setAns2Count(ans2Count + 1);
        }
        const q1c = document.getElementById('Q1-3');
        if (q1c.checked) {
          setAns3Count(ans3Count + 1);
        }
        // 第二題
        const q2a = document.getElementById('Q2-1');
        if (q2a.checked) {
          setAns1Count(ans1Count + 1);
        }
        const q2b = document.getElementById('Q2-2');
        if (q2b.checked) {
          setAns2Count(ans2Count + 1);
        }
        const q2c = document.getElementById('Q2-3');
        if (q2c.checked) {
          setAns3Count(ans3Count + 1);
        }
        console.log(q1a)
        console.log(ans1Count)
        
      }}>送出統計結果</button>
      <br />
      顯示統計次數結果：
      <p>選項1：{ans1Count}次</p>
      <p>選項2：{ans2Count}次</p>
      <p>選項3：{ans3Count}次</p>
    </>
  )
}
export default App