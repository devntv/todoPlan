import React,{useState} from 'react'
import TodoForm from './TodoForm'
import {IoMdCloseCircleOutline} from 'react-icons/io';
import {FiEdit} from 'react-icons/fi';


function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const[edit,setEdit] = useState({
        id:null,
        value:''
    });
    
   const submitUpdate = value=>{
     updateTodo(edit.id, value)
     setEdit({
         id:null,
         value:''
     })
   };

   if(edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>
   }

    return todos.map((todo, index)=>(
        <div  className={todo.isComplete? 'todo-row complete':'todo-row' } 
        key={index}
        >
            <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
             {todo.text}
            </div>
            <div className="icons">
                     <IoMdCloseCircleOutline  onClick={()=>{removeTodo(todo.id)}} className="delete-icon"/>
                     <FiEdit onClick={()=>{setEdit({id:todo.id, value:todo.text})}} className="edit-icon"/>
                     ✨
                 </div>
        </div>
    ))     
}

export default Todo
