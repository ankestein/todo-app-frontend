import './Board.css'
import TodoBox from './TodoBox'


export default function Board() {
    return (
        <div className='board'>
            <TodoBox title='To do' className='todo-box'>{'Task 3 blah'}</TodoBox>
            <TodoBox title='Doing' className='doing-box'>{'Task 2 blah'}</TodoBox>
            <TodoBox title='Done' className='done-box'>{'Task 1 blah'}</TodoBox>
        </div>
    )
}