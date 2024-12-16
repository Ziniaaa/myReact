import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; //載入node modules中的套件前面不加./


export default function App() {

useEffect(()=>{
    AOS.init(); //初始化
},[]
);


  return (
    <>
      <h1 data-aos="zoom-in" >AOS-zoom-in</h1>
      <div className="box" data-aos="fade-up" data-aos-duration="800">
        <p>data-aos="fade-up"</p>
        <p> data-aos-duration="800"</p>
      </div>
    </>
  )
}