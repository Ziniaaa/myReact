
import img1 from '/images/image-3.jpg'
import img2 from '/images/courseImg-2.jpg'
import img3 from '/images/courseImg-3.jpg'
import img4 from '/images/coursePic-1.jpg'
import img5 from '/images/coursePic-2.jpg'
import { useState } from 'react'

export default function App() {

  // 建立圖片陣列
  const arrPhotos = [img1, img2, img3, img4, img5];
  // 建立目前縮圖的變數
  const [currentImg, setCurrentImg] = useState(0);


  return (
    <>
      <div className="wrapper" >
        <section style={{
          width: '700px',display: 'flex', border: 'lightgray solid 2px', margin: '50px auto', padding: '20px',flexDirection: 'column'
        }}>
          {/* 大圖區 */}
          <div className='bigPhoto' style={{ alignSelf: 'center' }}>
            <img src={arrPhotos[currentImg]} alt="photos" wigth={"auto"} height={500} />
          </div>
          {/* 縮圖區 */}
          <div className='smallPhoto' style={{
            display: 'flex',  marginRight: '20px',alignSelf:'center'
          }}>
            {/* <img src={arrPhotos[0]} alt="photos" wigth={100} height={80} />
            <img src={arrPhotos[1]} alt="photos" wigth={100} height={80} />
            <img src={arrPhotos[2]} alt="photos" wigth={100} height={80} />
            <img src={arrPhotos[3]} alt="photos" wigth={100} height={80} />
            <img src={arrPhotos[4]} alt="photos" wigth={100} height={80} /> */}
            {arrPhotos.map((photo, index) => {
              return (
                <img key={photo} src={arrPhotos[index]} alt="photos" wigth={100} height={80}
                  onMouseOver={e => setCurrentImg(index)}
                  style={{ cursor: 'pointer', margin: '10px', }}
                />
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}