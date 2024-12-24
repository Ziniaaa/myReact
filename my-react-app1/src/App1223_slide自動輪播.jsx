import { div } from "motion/react-client";
import { useEffect, useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



export default function App() {
  // 建立目前背景圖的變數
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // 建立輪播圖片的陣列物件
  const slides = [
    { url: "./images/courseImg-1.jpg", title: 'PHOTO1' },
    { url: "./images/courseImg-2.jpg", title: 'PHOTO2' },
    { url: "./images/courseImg-3.jpg", title: 'PHOTO3' },
    { url: "./images/coursePic-1.jpg", title: 'PHOTO4' },
    { url: "./images/coursePic-2.jpg", title: 'PHOTO5' }
  ]

  // 當currentImgIndex改變時，會觸發useEffect
  useEffect(() => {
    // 每3秒呼叫nextSlide()換下一張圖
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);
    // 每3秒後，移除autoplay，以取得最新的索引編號
    return () => clearInterval(autoplay);
  }, [currentImgIndex]);


  // 下一張
  const nextSlide = () => {
    // 取得前一張的索引編號，檢查是否為最後一個編號
    // 是 → 回到第一張
    // 否 → 跳到下一張
    setCurrentImgIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }

  // 上一張
  const prevSlide = () => {
    // 取得前一張的索引編號，檢查是否為第一個編號
    // 是 → 跳到最後一張
    // 否 → 回到前一張
    setCurrentImgIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }

  // 建立左右icon元件
  const Arrow = ({ direction, onClick }) => {
    return (
      // 擺放icon的區域
      <div>{direction === "left" ? (<IoIosArrowBack size={50} onClick={onClick} />) : (<IoIosArrowForward size={50} onClick={onClick} />)}
      </div>
    )
  }

  return (
    <>
      <div className="wrapper" style={{
        border: 'solid 1px lightgray',
        maxWidth: '100vw',
        height: '100vh',
        margin: 'auto',
      }}>
        {/* 滿版背景輪播區 */}
        <div style={{
          backgroundImage: `url(${slides[currentImgIndex].url})`,
          border: 'solid 1px lightblue',
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          margin: 'auto',
        }}>
          {/* 文字區 */}
          <h2 style={{
            textAlign: 'center',
          }}>{slides[currentImgIndex].title}</h2>
          {/* 上一張 */}
          <Arrow direction="left" onClick={prevSlide} />
          {/* 下一張 */}
          <Arrow direction="right" onClick={nextSlide} />
        </div>
      </div>
    </>
  )
}