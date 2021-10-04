import Header from './components/Header';
import Board from './components/Board';
import {useEffect, useState} from "react";
import './App.css'
import jsonTodos from "./todos.json";


function App() {

    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')


   /* console.log(jsonTodos);*/

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


                    /*
                    .then(response => {
                   // .then(response => setTodos(response.json()))
                        if (response.ok) {
                            console.log(response)
                            console.log(`response: ${response}`)
                            setTodos(response.json())
                            //console.log(`My todo list: ${todos}`)
                        } else {
                        throw new Error('Failed to load todos')
                        }
                    })

                }
            }, [])

                     */


    console.log(`My todo list: ${todos}`)



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
