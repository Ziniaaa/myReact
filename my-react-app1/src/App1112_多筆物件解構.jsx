
function App() {
    // 建立物件變數↓
    // 若有多筆紀錄，使用大括號{}把資料包起來(用:代表=)
    const person = {
        s1: {
            name: "同學1",
            age: 10,
        },
        s2: {
            name: "同學2",
            age: 11,
        },
        s3: {
            name: "同學3",
            age: 13,
        }
    }

    // 【方法一】多筆資料的物件解構方法(有點像給予資料別名):一般寫法
    // const { s1, s2, s3 } = person;

    // 【方法二】多筆資料的物件解構方法:解構+展開...(其餘運算子)
    // 解構s1，展開s2,s3
    const { s1, ...other } = person;
    // console.log(s1);
    // console.log(other);
    // console.log(other.s3);


    const personA = {
        name: "同學A",
        age: 15
    }
    // function showName(obj) {
    //     console.log(obj);
    //     console.log(obj.name);
    //     console.log(obj.age);
    // }
    // 將物件屬性直接解構給函式參數
    function showName({ name, age }) {
        console.log(name);
        console.log(age);
    }
    showName(personA);

    return (
        <>
            <div>{`同學一姓名:${s1.name}`}</div>
            <div>{`同學一年齡:${s1.age}歲`}</div>
            <div>{`同學二姓名:${other.s2.name}`}</div>
            <div>{`同學三年齡:${other.s3.age}歲`}</div>


            {/* <div>第一位同學的姓名:{s1.name}</div>
            <div>第一位同學的年齡:{s1.age}歲</div>
            <hr />
            <div>第二位同學的姓名:{s2.name}</div>
            <div>第二位同學的年齡:{s2.age}歲</div>
            <hr />
            <div>第三位同學的姓名:{s3.name}</div>
            <div>第三位同學的年齡:{s3.age}歲</div> 
            */}


        </>
    )
}

export default App
