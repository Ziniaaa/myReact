// 載入app.css
import './App.css'

function MyComponent1() {
    const feature = {
        f1: {
            title: "教學影音",
            text: "透過影音課程OOXX",
        },
        f2: {
            title: "良性互動",
            text: "學習過程中OOXX",
        },
        f3: {
            title: "趨勢分享",
            text: "分享目前時下OOXX",
        }
    }
    const { f1, f2, f3 } = feature;

    return <>
        <ul>
            <h2>{f1.title}</h2>
            <p>{f1.text}</p>
        </ul>
        <ul>
            <h2>{f2.title}</h2>
            <p>{f2.text}</p>
        </ul>
        <ul>
            <h2>{f3.title}</h2>
            <p>{f3.text}</p>
        </ul>
    </>
}

function MyComponent2() {
    const recommend = {
        r1: {
            imgUrl: "../public/images/unity.jpg",
            title: "Unity5",
            text: "透過影音課程OOXX最新的Unity公開課程，",
            teacher: "XXX",
            hours: 4,
            price1: 1600,
            price2: 1200,
        },
        r2: {
            imgUrl: "../public/images/gamesalad.jpg",
            title: "GameSalad 2D遊戲製作",
            text: "視覺化操作，2D遊戲快速開發，不寫程式OOXX",
            teacher: "XXX",
            hours: 8,
            price1: 3200,
            price2: 1600,
        },
        r3: {
            imgUrl: "../public/images/gwd.jpg",
            title: "Google Web Design",
            text: "用於建立HTML5廣告動畫，透過時間軸OOXX",
            teacher: "XXX",
            hours: 8,
            price1: 3200,
            price2: 1600,
        }
    }
    const { r1, r2, r3 } = recommend;

    return <>
        <div id='cards'>
            <a className='box'>
                <img className="cardImg" src={r1.imgUrl} alt="" />
                <p>
                <h3 className="cardTitle">{r1.title}</h3>
                <p className="cardText">{r1.text}</p>
                <p className="teacherName">{`講師:${r1.teacher}`}</p>
                <p className="classHours">{`影音課程時數:${r1.hours}`}</p>
                </p>
                <p className='price'><span>{`原價NT$${r1.price1}`}</span>{`NT$${r1.price2}`}</p>
                <button className="payment">付款上課去</button>
            </a>
            <a className='box'>
                <img className="cardImg" src={r2.imgUrl} alt="" />
                <p>
                <h3 className="cardTitle">{r2.title}</h3>
                <p className="cardText">{r2.text}</p>
                <p className="teacherName">{`講師:${r2.teacher}`}</p>
                <p className="classHours">{`影音課程時數:${r2.hours}`}</p>
                </p>
                <p className='price'><span>{`原價NT$${r2.price1}`}</span>{`NT$${r2.price2}`}</p>
                <button className="payment">付款上課去</button>
            </a>
            <a className='box'>
                <img className="cardImg" src={r3.imgUrl} alt="" />
                <p>
                <h3 className="cardTitle">{r3.title}</h3>
                <p className="cardText">{r3.text}</p>
                <p className="teacherName">{`講師:${r3.teacher}`}</p>
                <p className="classHours">{`影音課程時數:${r3.hours}`}</p>
                </p>
                <p className='price'><span>{`原價NT$${r3.price1}`}</span>{`NT$${r3.price2}`}</p>
                <button className="payment">付款上課去</button>
            </a>
        </div>
    </>
}


function App() {
    return (
        <>
            <div className="wrap">
                {/* 頁首廣告區 */}
                <div className="header">
                    <img src="../public/images/banner.jpg" alt="" />
                </div>
                {/* 特色區 */}
                <div className="feature">
                    <MyComponent1 />
                </div>
                {/* 主標 */}
                <h3 className="mainTitle">讓學習成為一種習慣</h3>
                {/* 推薦課程區 */}
                <div >
                    <h3>推薦課程</h3>
                    <MyComponent2 />
                </div>
                
                {/* 頁尾區 */}
                <footer>&copy;童瀞萱</footer>
            </div>

        </>
    )
}

export default App
