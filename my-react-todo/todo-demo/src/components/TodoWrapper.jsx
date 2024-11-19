import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"

function TodoWrapper() {

    // 因為有多個todo，所以使用陣列存取
    // const [todos, setTodos] = useState(['List1', 'List2']);
    // 因為陣列需要key屬性，所以要改成陣列物件，加上id (實務上不會用random，會紀錄資料庫)
    const [todos, setTodos] = useState([
        { content: 'List1', id: Math.random() },
        { content: 'List2', id: Math.random() },
    ]);

    // 建立加入新的todo內容
    // 1.使用...其餘運算子來保留原陣列內容
    // 2.再加入新的物件內容
    const addTodo = (content) => {
        setTodos([...todos, { content: content, id: Math.random() }])
    };

    // 建立刪除todo函式，傳給Todo元件使用
    // 使用filter方法，去除被刪除的todo
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {
            // 此處使用「回調函式」↑
            // 檢查目前的id是否為被刪除的id
            // 如果不是，則保留
            return todo.id !==id
        }))
    }

    return (
        <div className="wrapper">
            <h1>代辦事項</h1>
            <CreateForm addTodo={addTodo} />
            {
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id} 
                    deleteTodo={deleteTodo}
                    />
                })
            }


        </div>
    )
}
export default TodoWrapper