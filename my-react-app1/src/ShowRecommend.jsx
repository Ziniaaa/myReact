// 推薦區元件
// 【方法二】
// 把資料放在要使用此資料的組件中
// 就可以不用做解構賦質，迴圈組件直接提取資料
function ShowRecommend() {
    // 推薦區資料
    const recommend = [
        {
            id: 1,
            imgUrl: "../public/images/unity.jpg",
            title: "Unity5",
            text: "透過影音課程OOXX最新的Unity公開課程，",
            teacher: "XXX",
            hours: 4,
            price1: 1600,
            price2: 1200,
        },
        {
            id: 2,
            imgUrl: "../public/images/gamesalad.jpg",
            title: "GameSalad 2D遊戲製作",
            text: "視覺化操作，2D遊戲快速開發，不寫程式OOXX",
            teacher: "XXX",
            hours: 8,
            price1: 3200,
            price2: 1600,
        },
        {
            id: 3,
            imgUrl: "../public/images/gwd.jpg",
            title: "Google Web Design",
            text: "用於建立HTML5廣告動畫，透過時間軸OOXX",
            teacher: "XXX",
            hours: 8,
            price1: 3200,
            price2: 1600,
        },
    ]
    return (
        <>
            {
                recommend.map((item) => {
                    return (
                        <>
                            <div className='box' key={item.id}>
                                <img className="cardImg" src={item.imgUrl} alt="" />
                                <p>
                                    <h3 className="cardTitle">{item.title} </h3>
                                    <p className="cardText">{item.text}</p>
                                    <p className="teacherName">講師:{item.teacher}</p>
                                    <p className="classHours">影音課程時數:{item.hours}</p>
                                </p>
                                <p className='price'><span>原價NT${item.price1}</span>NT${item.price2}</p>
                                <button className="payment">付款上課去</button>
                            </div>
                        </>
                    )

                })
            }
        </>
    )
}

export default ShowRecommend