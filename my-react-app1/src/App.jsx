import { useState } from "react"

export default function App() {
// 使用表單送出
  const [search, setSearch] = useState('');
  const formHandelSubmit = (e) => {
    e.preventDefault();
    console.log('使用form submit送出：',search)
  };

// 使用鍵盤事件→enter鍵送出
const enterHandleSubmit=(e)=>{
  // 若要確認輸入的內容為數字或文字，可看onKeyDown console中的Key code，查詢ascii編碼內容
  console.dir(e);
  if(e.key==="Enter"){
    console.log('使用Enter送出',search);
  }
};


  return (
    <>
      <div>
        {/* 使用表單送出的方式，適用於單一欄位 */}
        <form onSubmit={formHandelSubmit}>
          {/* 搜尋列1 */}
          <div><label htmlFor="search1">搜尋1
            <input type="search" id="search1" name="mySearch"
              value={search} onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          </div>
        </form>
        {/* 搜尋2：不使用表單送出 */}
        <div><label htmlFor="search2">搜尋2
          <input type="search" id="search2" name="mySearch2"
            value={search} onChange={(e) => setSearch(e.target.value)}
            onKeyDown={enterHandleSubmit} />
        </label>
        </div>
      </div>
    </>
  )
}