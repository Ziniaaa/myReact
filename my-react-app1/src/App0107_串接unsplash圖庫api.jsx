import axios from "axios";
import { div } from "motion/react-client";
import { useEffect, useState } from "react";

export default function App() {
  // 
  // https://api.unsplash.com/search/photos/?client_id=
  // https://api.unsplash.com/photos/?client_id=


  const api = "https://api.unsplash.com/search/photos";
  const accessKey = "ynt_doUxpcL6kE2PiXt1IedTiqZNffDN-5f0VjQ8EUY";
  const [filterString, setFilterString] = useState('corgi');
  // 建立列表用的陣列
  const [jsonData, setJsonData] = useState([]);

  // 放入useEffect，避免重新渲染造成
  useEffect(() => {
    // 建立非同步方法，取得遠端資料
    const getPhotos = async () => {
      console.log(`${api}?client_id=${accessKey}&query=${filterString}`);
      // 發出請求給遠端api，傳回結果
      const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`);
      // 全部資料
      console.log(result);
      // 第一頁的10筆紀錄
      console.log(result.data.results);
      setJsonData(result.data.results);
    }
    getPhotos();
  }, [])

  // 建立顯示圖片元件
  const ShowPhoto = () => {
    return (
      jsonData.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.urls.regular} alt="" width="400" height="400" style={{ objectFit: "cover" }} />
          </div>

        )
      })
    )
  }

  // 渲染時使用JSX語法，若要使用JS語法，前後加{}
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ShowPhoto />
      </div>
    </>
  )
}
