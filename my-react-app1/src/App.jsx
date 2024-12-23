import { useEffect, useState } from "react"


export default function App() {
  // 建立目前背景圖的變數
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // 建立輪播圖片的陣列物件
  const sliders = [
    { url: "./images/courseImg-1.JPG", title: 'PHOTO1' },
    { url: "./images/courseImg-2.jpg", title: 'PHOTO2' },
    { url: "./images/courseImg-3.jpg", title: 'PHOTO3' },
    { url: "./images/coursePic-1.jpg", title: 'PHOTO4' },
    { url: "./images/coursePic-2.jpg", title: 'PHOTO5' }
  ]

  // 當currentImgIndex改變時，會觸發useEffect
  useEffect(() => {
    // 每3秒呼叫nextSlide()換下一張圖
    const autoplay = setInterval(() => {
      nextSlide()
    }, 3000);
    // 每3秒後，移除autoplay，以取得最新的索引編號
    return () => clearInterval(autoplay);
  }, [currentImgIndex]);


  // 下一張
  const nextSlide = () => {
    // 取得前一張的索引編號，檢查是否為最後一個編號
    // 是 → 回到第一張
    // 否 → 跳到下一張
    setCurrentImgIndex((prevIndex) => (prevIndex === sliders.length - 1 ? 0 : prevIndex + 1))
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
          backgroundImage: `url(${sliders[currentImgIndex].url})`,
          border: 'solid 1px lightblue',
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          margin: 'auto',
        }}>
          <h2 style={{}}>{sliders[currentImgIndex].title}</h2>
        </div>
      </div>
    </>
  )
}