import { MdDelete, MdEdit } from "react-icons/md";


// 把父元件(TodoWrapper)的資料傳給子元件(Todo)
// 解構props的屬性名，用{屬姓名}包起來 (本來是Todo(props)&<p>{props.todo}</p>)
function Todo({ todo, deleteTodo }) {
    return (
        <div className="todo">
            {/* <p>上課中</p> */}
            {/* <p>{todo}</p> */}
            <p>{todo.content}</p>
            <div>
                <MdEdit style={{ cursor: 'pointer' }} />
                <MdDelete
                    onClick={() => { deleteTodo(todo.id) }}
                    style={{ cursor: 'pointer', marginLeft: '5px' }} /> {/*←行內樣式*/}
                    {/* onClick→按左鍵時產生要被刪除的todo id */}
            </div>
        </div>
    )
}
export default Todo