import { useState } from "react"

export default function App() {

  // 單價變數
  const [price, setPrice] = useState(100);

  // 數量變數
  const [qty, setQty] = useState(1);

  // 總價變數
  const tot = price * qty;



  return (
    <>
      <h1>useMemo介紹</h1>
      <hr style={{ marginBottom: "30px" }} />
      <h2>使用useState↓</h2>
      單價：<input type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} /><br />
      總價：<input type="number" value={qty} onChange={(e) => {
        if (e.target.value <= 0) {
          alert("err");
          setQty(1);
        } else {
          setQty(e.target.value)
        }
      }} /><br />


      <div>總價：{tot}</div>
    </>
  )
}
