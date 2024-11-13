// 載入app.css
import './App.css'

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
                    <ul>
                        <h2>教學影音</h2>
                        <p>透過影音課程OOXX</p>
                    </ul>
                    <ul>
                        <h2>良性互動</h2>
                        <p>學習過程中OOXX</p>
                    </ul>
                    <ul>
                        <h2>趨勢分享</h2>
                        <p>分享目前時下OOXX</p>
                    </ul>
                </div>
                {/* 主標 */}
                <h3 className="mainTitle">讓學習成為一種習慣</h3>
                {/* 推薦課程區 */}
                <div >
                    <h3>推薦課程</h3>
                    <div id='cards'>
            <a className='box'>
                <img className="cardImg" src='../public/images/unity.jpg'  alt="" />
                <p>
                    <h3 className="cardTitle">Unity5 </h3>
                    <p className="cardText">透過影音課程OOXX最新的Unity公開課程，</p>
                    <p className="teacherName">講師:XXX</p>
                    <p className="classHours">影音課程時數:4</p>
                </p>
                <p className='price'><span>原價NT$1600</span>NT$1200</p>
                <button className="payment">付款上課去</button>
            </a>
            <a className='box'>
                <img className="cardImg" src="../public/images/gamesalad.jpg" alt="" />
                <p>
                    <h3 className="cardTitle">GameSalad 2D遊戲製作</h3>
                    <p className="cardText">視覺化操作，2D遊戲快速開發，不寫程式OOXX</p>
                    <p className="teacherName">講師:XXX</p>
                    <p className="classHours">影音課程時數:8</p>
                </p>
                <p className='price'><span>原價NT$3200</span>NT$1600</p>
                <button className="payment">付款上課去</button>
            </a>
            <a className='box'>
                <img className="cardImg" src="../public/images/gwd.jpg" alt="" />
                <p>
                    <h3 className="cardTitle">Google Web Design</h3>
                    <p className="cardText">用於建立HTML5廣告動畫，透過時間軸OOXX</p>
                    <p className="teacherName">講師:XXX</p>
                    <p className="classHours">影音課程時數:8</p>
                </p>
                <p className='price'><span>原價NT$3200</span>NT$1600</p>
                <button className="payment">付款上課去</button>
            </a>
        </div>
                </div>

                {/* 頁尾區 */}
                <footer>&copy;童瀞萱</footer>
            </div>

        </>
    )
}

export default App
