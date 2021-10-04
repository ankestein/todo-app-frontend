import TodoItem from "./TodoItem";
import './TodoList.css'

export default function TodoList({title, todos}) {
    return (
        <div className='container'>
            <h2>{title}</h2>
            <div>{
                todos.map(todo => <TodoItem key={todo.id} itemTodo={todo} />)
            }
            </div>
        </div>
    )
}