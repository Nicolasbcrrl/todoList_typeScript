import React, { useState } from 'react';
import TodoTable from './TodoTable';
import {TodoInt} from './interfaces';
//export default
function TodoList(){
    const [todo, setTodo] = useState<TodoInt>({} as TodoInt);
    const [todoList, setTodos] = useState<Array<TodoInt>>([]);

    const deleteTodo = (row: number)=>{
        console.log("Button pressed");
        setTodos(todoList.filter((todo, index)=> index !== row)); //ici on va faire une nouvelle list qui va exclure l'element à l'index et retourner une nouvelle liste avec les elements qui ne sont pas à cette index
    };
    
  const addTodo = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTodos([...todoList, todo]);
    setTodo({description: '', date: '', priority: ''});
  }

  const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 

  return (
    <div className="App">
      <input type="text" placeholder="Date" name="date" value={todo.date} onChange={inputChanged}/>
      <input type="text" placeholder="Description" name="description" value={todo.description} onChange={inputChanged}/>
        <input type="text" placeholder="Priority" name="priority" value={todo.priority} onChange={inputChanged}/>
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todoList} delete={deleteTodo}/>
    </div>
  );
}

export default TodoList // ici ou direct dans le titre de la fuction du componnet