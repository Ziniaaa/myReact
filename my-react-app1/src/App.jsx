
function App() {

  // 建立函式方法一
  function sayHi() {
    alert('Hello!')
  }
  // 建立函式方法二
  const sayHi2=()=>{
    alert('Bonjour!')
  }

  return (

    <div>
      {/* 事件處理1：在html標籤上綁定事件 */}
      {/* 匿名函式↓ */}
      <button onClick={function () { alert('哈囉~') }}>我是按鈕一號</button>
      {/* 箭頭函式↓ */}
      <button onClick={() => { alert('おはよう~') }}>我是按鈕二號</button>
      
      {/* 事件處理2：呼叫函式 【較常見(減少要渲染的return內部的資料量)】*/}
      {/* 建立等待被呼叫的函式，函式名稱後面不可加()，否則會直接被執行↓ */}
      <button onClick={sayHi}>我是按鈕三號</button>
      <button onClick={sayHi2}>我是按鈕四號</button>
    </div>
  )
}

export default App
