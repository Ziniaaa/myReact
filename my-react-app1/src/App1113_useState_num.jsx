import { useState } from "react";
// ↑打出useState時會自動帶出

function App() {
    // const=常數=不能變動的值
    // 執行中若要改變const值，必須使用useState
    // ↓如果改用var/let，雖然log會運作，但因為沒有指定再次渲染，所以畫面不會變動
    // const num = 0;

    // 定義useState  (useState是react中的一種Hook，※Hook像是excel中的函式庫(都是use開頭))
    // const [變數名稱，更改變數的方法]=useState(初始值);
    const [num, setNum] = useState(0); /*setNum = set變數num(但要駝峰命名)*/

    function btnClick() {
        // 修改num值
        setNum(num + 5);
    }

    return (
        <>
            <h1>React狀態-useState方法</h1>
            <h2>目前值：{num}</h2>

            {/* 事件綁定：箭頭函式(做在標籤中) */}
            {/* 標籤中要做函式處理時要使用箭頭函式 */}
            <button onClick={() => {
                // num++;←不可使用++因為會複寫num
                // console.log(num);
                setNum(num + 1);
            }}>+1</button >

            {/* 事件綁定：呼叫函式 */}
            <button onClick={btnClick}>+5</button>

        </>

    )

}

export default App