import "./App.css"


// 建立新的元件，建議增加在App標籤外(元件中不建議再建立新元件，但可以在元件中使用其他元件)
function MyComponent2() {
  return (
    /*空標籤：Fragment*/
    <>
      <h2>react</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, nulla at. Sed accusamus, velit distinctio optio fugit.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
}

function App() {

  // 建立變數
  const strName = "阿來arai";
  return (
    <div>
      {/* JSX中使用javascript變數，前後加大括號{變數名稱} */}
      <h1 style={{
        color: "brown",
        backgroundColor: "lightgoldenrodyellow",
        width: '300px',
      }}>{strName.toUpperCase()}, 午安</h1>
      {/* 屬性中使用變數傳遞資料 */}
      <label className="unLineColor" htmlFor="username">請輸入姓名</label>
      <input type="text" id="username" placeholder={strName} />
      <MyComponent2></MyComponent2>
      <MyComponent2 />

    </div>
  )
}

export default App
