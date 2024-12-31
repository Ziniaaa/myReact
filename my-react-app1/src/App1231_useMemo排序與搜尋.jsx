import { useMemo, useState } from "react"

export default function App() {

  const prodData = [
    {
      id: 1,
      title: '美式黑咖啡',
      price: 80,
      imageUrl: "./images/01.jpg"
    },
    {
      id: 2,
      title: '經典拿鐵',
      price: 120,
      imageUrl: './images/02.jpg'
    },
    {
      id: 3,
      title: '焦糖拿鐵',
      price: 180,
      imageUrl: './images/03.jpg'
    },
    {
      id: 4,
      title: '焦糖瑪奇朵',
      price: 140,
      imageUrl: './/images/04.jpg'
    },
    {
      id: 5,
      title: '濃縮咖啡',
      price: 80,
      imageUrl: './/images/05.jpg'
    },
  ]

  // 建立表格元件
  const ProdTable = ({ filterProds }) => {
    return (
      <table style={{ width: "400px" }}>
        <tbody>
          {
            filterProds.map((prod) => {
              return (
                <tr key={prod.id} >
                  <td style={{
                    borderBottom: "1px dashed lightgray",
                    padding: "8px",
                    width: "300px",
                  }}> <figure style={{ textAlign: "center" }}>
                      <img src={prod.imageUrl} alt="" style={{ width: "100px" }} />
                      <figcaption>{prod.title} </figcaption>
                    </figure>
                  </td>
                  <td style={{
                    borderBottom: "1px dashed lightgray",
                    padding: "8px",
                    width: "100px",
                    textAlign: "right"
                  }}>{prod.price}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }

  // 陣列變數，預設為元商品的資料
  const [prods, setProds] = useState(prodData);
  // 排序變數，預設為遞增
  const [ascending, setAscending] = useState(true);
  // 搜尋變數
  const [search, setSearch] = useState('');

  // 建立排序與搜尋的函式 useMemo(()=>{},[什麼時候觸發useMemo])
  // (監聽事件時用useEffect)
  const filterProds = useMemo(() => {
    return [...prods]
      .sort((a, b) => {
        // 是ture就排序a-b的意思
        return ascending ? a.price - b.price : b.price - a.price;
      })
      .filter((prod) => {
        return prod.title.match(search);
      })

  }, [ascending, search]);

  return (
    <>
      <h1>useMemo搜尋與排序</h1>
      <hr style={{ marginBottom: "30px" }} />
      升降冪：
      <input type="checkbox"
        checked={ascending}
        onChange={(e) => { setAscending(e.target.checked) }}
      />
      <br />
      搜尋：
      <input type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)} />

      {/* 呼叫表格元件 (通常元件內容和元件屬性相同)*/}
      <ProdTable filterProds={filterProds} />


    </>
  )
}
