import { useState } from "react"

function EditForm({ todo, editTodo }) {
    // 建立input內容的變數(輸入useState)→自動產生陣列
    const [content, setContent] = useState(todo.content);

    // console.log(content); ←可以確認一下content有沒有設定成功

    const handleSubmit = (e) => {
        // 取消事件預設行為
        e.preventDefault();
        editTodo(todo.id, content)

    }
    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input type="text"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value)
                }

                } />
            <button type="submit">完成</button>

        </form>
    )

}

export default EditForm