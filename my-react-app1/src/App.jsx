import { useEffect } from "react";

function App() {
  // 建立變色函式
  useEffect(()=>{
    const p1 = document.getElementById('p1');
    p1.addEventListener('mouseover',()=>{
      p1.style.color = "blue";
      p1.style.fontWeight = "bold";
    })
    p1.addEventListener('mouseout',()=>{
      p1.style.color = "";
      p1.style.fontWeight = "";
    })

    const p2 = document.querySelector('#p2');
    p2.addEventListener('mouseenter',()=>{
      p2.textContent = "哈囉";
    })
    p2.addEventListener('mouseleave',()=>{
      p2.textContent = "變內容";
    })

    const h1=document.getElementById('h1');
    h1.addEventListener('click',(e)=>{
      console.log(e.target.textContent);
      e.target.textContent="click事件被觸發了";
      e.target.style.color="purple";

    })

    // const h1=document.getElementById('h1');
    // h1.addEventListener('click',()=>{
    //   const h1Text=h1.textContent;
    //   console.log(h1Text);
    //   alert(h1Text);
    // })

      },[]);
  


  return (
    <>
      <h1 id="h1">滑鼠事件</h1>
      <hr />
      <p id="p1">變色</p>
      <p id="p2">變內容</p>

      
    </>
  )
}
export default App