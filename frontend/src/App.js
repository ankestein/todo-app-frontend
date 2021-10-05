import Header from './components/Header';
import Board from './components/Board';
import {useEffect, useState} from "react";
import './App.css'


function App() {

    const [todos, setTodos] = useState([])
    const [description, setDescription] = useState('')

    const getTodos = () => {
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
    }

    useEffect(() => getTodos(), [])

    const handleInput = event => {
        const newDescription = event.target.value;
        setDescription(newDescription);
    }


    const handleSubmit = event => {
        event.preventDefault();
        addTodo(description);
        setDescription('');
    }

    const addTodo = (description) => {
        const newTodo = {description: description, status: 'todo'};
        fetch('api/todo', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTodo)
        })
            .then(response => {
                if (response.ok) {
                   getTodos()
                } else {
                    throw new Error('Failed to post and load todos')
                }
            })
            .catch(error => console.error(error))
    }

/*
    useEffect((description) => {
        addTodo(description)
    }, [description])
 */


  return (
      <>
          <Header title='Kanban Board'/>

          <form onSubmit={handleSubmit}>
              <input type='text' name='input-todo' className='input-field' placeholder='Enter new task' onInput={handleInput}/>
              <input type='submit' value='Submit'/>
          </form>

          <Board todos={todos}/>

      </>
  );
}


export default App;