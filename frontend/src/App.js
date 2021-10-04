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
        event.preventDefault();
        const newDescription = event.target.value;
        setDescription(newDescription);
        addTodo(description);
    }
    console.log(`description: ${description}`)



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


// if handleInput is included in input field, adding todos
// works except that a new task is added for every added character (i.e. not after pressing submit button or enter)
// if handleInput is used in form, description is undefined and not todos are added


  return (
      <>
          <Header title='Kanban Board'/>

          <form onSubmit={handleInput}>
              <input type='text' name='inputtodo' className='input-field' placeholder='Enter new task'/>
              <input type='submit' value='Submit'/>
          </form>

          <Board todos={todos}/>

      </>
  );
}


export default App;