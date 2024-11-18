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

    return (
        <div className="wrapper">
            <h1>代辦事項</h1>
            <CreateForm addTodo={addTodo}/>
            {
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id} />
                })
            }


        </div>
    )
}
export default TodoWrapper