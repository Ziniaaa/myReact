// 載入app.css
import './App.css'
import ShowRecommend from'./ShowRecommend.jsx'
import ShowFeature from './ShowFeature.jsx'

// 特色區元件【方法一:解構賦質】
// 因為此處資料(contentData)放在App組件中，
// 下方App組件(父組件)將要傳給ShowFeature組件(子組件)
// 的資料arrData屬性指定為contentData，
// ShowFeature組件(子組件)讀取arrData，並回傳(return)
// App組件再使用ShowFeature組件回傳的內容渲染
// function ShowFeature({ arrData }) {
//     return (
//         <>
//             {/* ↑此處加空標籤是因為跑迴圈後，這裡會有三段<ul> */}
//             {/* ★JSX中使用迴圈，要用map */}
//             {/*  */}
//             {
//                 arrData.map((item) => {
//                     return (
//                         <ul key={item.id}>
//                             <h2>{item.title}</h2>
//                             <p>{item.text}</p>
//                         </ul>
//                     )
//                 })
//             }
//         </>
//     )
// }


// // 推薦區元件
// // 【方法二】+【外連(import+export)※重工所以抽離】
// // 把資料放在要使用此資料的組件中
// // 就可以不用做解構賦質，迴圈組件直接提取資料
// function ShowRecommend() {
//     // 推薦區資料
//     const recommend = [
//         {
//             id: 1,
//             imgUrl: "../public/images/unity.jpg",
//             title: "Unity5",
//             text: "透過影音課程OOXX最新的Unity公開課程，",
//             teacher: "XXX",
//             hours: 4,
//             price1: 1600,
//             price2: 1200,
//         },
//         {
//             id: 2,
//             imgUrl: "../public/images/gamesalad.jpg",
//             title: "GameSalad 2D遊戲製作",
//             text: "視覺化操作，2D遊戲快速開發，不寫程式OOXX",
//             teacher: "XXX",
//             hours: 8,
//             price1: 3200,
//             price2: 1600,
//         },
//         {
//             id: 3,
//             imgUrl: "../public/images/gwd.jpg",
//             title: "Google Web Design",
//             text: "用於建立HTML5廣告動畫，透過時間軸OOXX",
//             teacher: "XXX",
//             hours: 8,
//             price1: 3200,
//             price2: 1600,
//         },
//     ]
//     return (
//         <>
//             {
//                 recommend.map((item) => {
//                     return (
//                         <>
//                             <div className='box' key={item.id}>
//                                 <img className="cardImg" src={item.imgUrl} alt="" />
//                                 <p>
//                                     <h3 className="cardTitle">{item.title} </h3>
//                                     <p className="cardText">{item.text}</p>
//                                     <p className="teacherName">講師:{item.teacher}</p>
//                                     <p className="classHours">影音課程時數:{item.hours}</p>
//                                 </p>
//                                 <p className='price'><span>原價NT${item.price1}</span>NT${item.price2}</p>
//                                 <button className="payment">付款上課去</button>
//                             </div>
//                         </>
//                     )

//                 })
//             }
//         </>
//     )
// }

function App() {

    // 特色區資料(for方法一)
    // const contentData = [ /*改成中括號變成陣列*/
    //     {
    //         id: 1,
    //         title: "教學影音",
    //         text: "透過影音課程OOXX",
    //     },
    //     {
    //         id: 2,
    //         title: "良性互動",
    //         text: "學習過程中OOXX",
    //     },
    //     {
    //         id: 3,
    //         title: "趨勢分享",
    //         text: "分享目前時下OOXX",
    //     },
    // ]



    return (
        <>
            <div className="wrap">
                {/* 頁首廣告區 */}
                <div className="header">
                    <img src="../public/images/banner.jpg" alt="" />
                </div>
                {/* 特色區 */}
                <div className="feature">
                    {/* <ShowFeature arrData={contentData} /> 【for 方法一】*/}
                    <ShowFeature/>
                </div>

                {/* 主標 */}
                <h3 className="mainTitle">讓學習成為一種習慣</h3>
                {/* 推薦課程區 */}
                <div >
                    <h3>推薦課程</h3>
                    <div id='cards'>
                        <ShowRecommend />
                    </div>
                </div>

                {/* 頁尾區 */}
                <footer>&copy;童瀞萱</footer>

            </div>

        </>
    )
}

export default App
