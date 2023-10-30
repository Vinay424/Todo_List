import React from 'react'

const Todo = ({todo,onDelete}) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger ' onClick={()=>onDelete(todo)}>DELETE</button>
    </div>
  )
}

export default Todo
