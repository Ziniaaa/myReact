import { useState } from "react"

function CreateForm({addTodo}) {
    // 建立input內容的變數(輸入useState)→自動產生陣列
    const [content, setContent] = useState('');

    // console.log(content); ←可以確認一下content有沒有設定成功

    const handleSubmit=(e)=>{
        // 取消事件預設行為
        e.preventDefault();
        // 增加todo內容
        addTodo(content);
        // 清除input內容
        setContent('');
    }
    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="輸入代辦事項"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value)
                }

                } />
            <button type="submit">加入</button>
            {/* ↑submit事件表示：按下按鈕後，內容會被處理 */}

        </form>
    )
}

export default CreateForm