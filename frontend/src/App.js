import Header from './components/Header';
import Board from './components/Board';
import {useEffect, useState} from "react";
import './App.css'



function App() {

    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')



    useEffect(() => {
        fetch('/api/todo')
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Failed to load todos')
                }
            })
            .then(json => setTodos(json))
            .catch(error => console.error(error))
    }, [])



    const handleInput = event => {
        const newTask = event.target.value()
        setTask(newTask);
    }


  return (
      <>
          <Header title='Kanban Board'/>

          <input type='text' className='input-field' placeholder='Enter new task' onInput='handleInput'/>
          <input type='submit' value='Submit'/>

          <Board todos={todos}/>

      </>
  );
}



export default App;
