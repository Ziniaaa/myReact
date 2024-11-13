import { useState } from "react"

function App() {
    // 定義變數name與方法setName
    // 透過useState將內容丟給變數
    const [name, setName] = useState("阿來");
    const[name2, setName2]=useState("Arai");

    function changeName(e) {
        setName2(e.target.value);
    }

    return (
        <>
            <h1>設計一個輸入名字的欄位，並且即時顯現出來</h1>
            <hr />
            <h3>目前文字方塊的內容：{name}</h3>
            {/* 使用value把name帶入input */}
            {/* 當文字更改的時候會觸發onChange行為(像是onClick)↓ */}
            {/* e→event→觸發事件的參數 */}
            請輸入姓名：<input type="text" value={name} onChange={(e) => {
                // console.log(e);
                // 抓取內容的位置，透過setName方法傳回給value
                setName(e.target.value);
            }} />{name}
            <br />
            請輸入姓名2：<input type="text" value={name2} onChange={changeName} />{name2}

        </>
    )

}

export default App