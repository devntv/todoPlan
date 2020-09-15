import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
import { FaReact } from 'react-icons/fa'
import { VscChevronLeft,VscChevronRight } from 'react-icons/vsc'
function TodoList() {
    
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        
        const newTodos = [todo, ...todos]; //[a]-[], [b]-[a], [c][b]
       
        setTodos(newTodos);
        // console.log(todo,...todos);
        localStorage.setItem('todos',JSON.stringify(newTodos));
    
     //const saveTodo=  localStorage.getItem('todo');
   
    };

    const completeTodo = id => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
        })

        setTodos(updatedTodos);
    }


 

    const removeTodo = id => {
        // cach 1
        const removeItem = [...todos].filter(x => x.id !== id)
        setTodos(removeItem);
        //cach 2
        // const index = todos.findIndex(x=>x.id === id);
        // if(index <0) return;
        // const newTodos =[...todos];
        // newTodos.splice(index,1)
        // setTodos(newTodos);

    }
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        // setTodos(x => x.map(item => (item.id === todoId ? newValue : item))
        // )
        setTodos(x =>x.map( item => item.id === todoId ? newValue : item))
    }


    return (
        <div>
            <h1>ADD Your <span style={{color:"#61dafb"}}>Plan</span> In To Day  <span style={{color:"#61dafb"}}><VscChevronLeft />  React <VscChevronRight/> </span></h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList
