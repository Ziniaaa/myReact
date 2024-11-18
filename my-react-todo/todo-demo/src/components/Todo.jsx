// 把父元件(TodoWrapper)的資料傳給子元件(Todo)
// 解構props的屬性名，用{屬姓名}包起來 (本來是Todo(props)&<p>{props.todo}</p>)
function Todo({todo}){
    return(
        <div className="todo">
            {/* <p>上課中</p> */}
            {/* <p>{todo}</p> */}
            <p>{todo.content}</p>
        </div>
    )
}
export default Todo