import './Board.css'
import './TodoList.css'
import TodoList from './TodoList'


export default function Board({todos}) {

    /*const loadTodos = () => {
        setTodos(todoResponse)
    }*/

    const filteredTodos = (status) => {
        return todos.filter(todo => todo.status === status)
    }


    return (
        <div className='board'>
            <TodoList className='todo-box' title='To do' todos={filteredTodos('todo')}/>
            <TodoList className='doing-box' title='Doing' todos={filteredTodos('doing')}/>
            <TodoList className='done-box' title='Done' todos={filteredTodos('done')}/>
        </div>
    )
}