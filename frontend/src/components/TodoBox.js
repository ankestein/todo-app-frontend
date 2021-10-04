import TodoItem from "./TodoItem";
import './TodoBox.css'

export default function TodoBox({title, todos}) {
    return (
        <div className='container'>
            <h2>{title}</h2>
            <div>{
                todos.map(todo => <TodoItem itemTodo={todo} />)
            }
            </div>
        </div>
    )
}