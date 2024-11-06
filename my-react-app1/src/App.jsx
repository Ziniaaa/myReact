
// 建立新的元件，建議增加在App標籤外(元件中不建議再建立新元件，但可以在元件中使用其他元件)
function MyComponent2() {
  return (
    /*空標籤：Fragment*/
    <>
      <h1>react</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, nulla at. Sed accusamus, velit distinctio optio fugit, assumenda vitae soluta accusantium magni atque suscipit eos quo sint beatae! Laboriosam, eos?</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
}

function App() {

  return (
    <div>
      <MyComponent2></MyComponent2>
      <MyComponent2 />
      <MyComponent2 />
    </div>
  )
}

export default App
