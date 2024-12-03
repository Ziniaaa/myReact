function ShowCity() {
    useEffect(() => {




    })()

    return (
        <>
            (async () => {
            // json本地端要在web-server伺服器下才能執行
            // const data = await axios.get('./F-C0032-001.json');

            // json的連結必須是公開網址下的來源
            const data = await axios.get('https://ziniaaa.github.io/myReact/json/F-C0032-001.json');
            // console.log(data);
            const {location} = data.data.cwaopendata.dataset;
            console.log(location);
            }, [])
            
        </>

    )
}
export default ShowCity