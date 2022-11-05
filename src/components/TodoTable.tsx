import React from 'react';
import { TodoInt } from './interfaces';

export default function TodoTable(props : {todos: Array<TodoInt>, delete: (row: number) => void}) {
  return (
    <div>
      <table style={{ margin: '0 auto', width: '40%' }} id="todotable"><tbody>
      {
        props.todos.map((todo, index) => 
          <tr key={index}>
            <td>{todo.date}</td>
            <td>{todo.description}</td>
            <td>{todo.priority}</td>
            <td><button onClick={()=>props.delete(index)}> Delete </button></td>
          </tr>)
        }
        </tbody></table>    
    </div>
  )
}