import { createContext, useContext, useState } from "react"

export default function App() {
  // 在元件中傳遞資料，需要建立共用環境區域來放置變數
  const UserContext = createContext({});
  // 建立使用者變數
  const [username, setUsername] = useState('');
  // 建立登入鈕的控制
  const [isLogin, setIsLogin] = useState(false);


  // 建立登入元件
  const LoginForm = () => {
    // 因為要放在共用區，故往上搬移到APP元件內
    // const [username, setUsername] = useState('');
    // 從共用區的userContext解構出username,setUsername
    const { username, setUsername, setIsLogin } = useContext(UserContext);

    return (
      <>
        <label htmlFor="userName">使用者名稱</label>
        <input type="text"
          id="username"
          placeholder="請輸入使用名稱"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />

        <button type="button" onClick={() => { setIsLogin(true) }}>登入</button>
      </>
    )
  }


  // 建立登入後的歡迎元件
  const Greeting = () => {
    // 從共用區(userContext)使用useContext這個Hook取得資料(username)
    const { username } = useContext(UserContext);
    return (
      <div>
        Hi,{username}
      </div>
    )
  }

  // 建立一個不同元件來使用username
  const NewComponent = () => {
    const { username }=useContext(UserContext)
    return (
      <>
        <div>我是新元件NewComponent，{ username }</div>
      </>
    )
  }


  return (
    <>
      <h1>useContext</h1>
      <hr style={{ marginBottom: "30px" }} />
      <UserContext.Provider value={{ username, setUsername, setIsLogin }}>
        {/* 
        <LoginForm />
        <br />
        <Greeting />
        */}
        {/* 將原本的架構改成三元運算子 */}
        {isLogin === true ? <><NewComponent/><Greeting /></>: <LoginForm />}
      </UserContext.Provider>
    </>
  )
}
