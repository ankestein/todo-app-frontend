import './Board.css'
import './TodoBox.css'
import TodoBox from './TodoBox'


export default function Board({todos}) {

    /*const loadTodos = () => {
        setTodos(todoResponse)
    }*/

    const filteredTodos = (status) => {
        return todos.filter(todo => todo.status === status)
    }


    return (
        <div className='board'>
            <TodoBox className='todo-box' title='To do' todos={filteredTodos('todo')}/>
            <TodoBox className='doing-box' title='Doing' todos={filteredTodos('doing')}/>
            <TodoBox className='done-box' title='Done' todos={filteredTodos('done')}/>
        </div>
    )
}