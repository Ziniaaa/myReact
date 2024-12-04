// 特色區元件(方法二)
function ShowFeature() {
    const contentData = [ /*改成中括號變成陣列*/
        {
            id: 1,
            title: "教學影音",
            text: "透過影音課程OOXX",
        },
        {
            id: 2,
            title: "良性互動",
            text: "學習過程中OOXX",
        },
        {
            id: 3,
            title: "趨勢分享",
            text: "分享目前時下OOXX",
        },
    ]
    return (
        <>
            {/* ↑此處加空標籤是因為跑迴圈後，這裡會有三段<ul> */}
            {/* ★JSX中使用迴圈，要用map */}
            {/*  */}
            {
                contentData.map((item) => {
                    return (
                        <ul key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </ul>
                    )
                })
            }
        </>
    )
}

export default ShowFeature