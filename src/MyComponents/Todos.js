import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  let mystyle={
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className='container my-3' style={mystyle}>
        <h4 className='text-center'>TODO LIST</h4>
        {props.todos.length===0 ? "NOTHING TO DISPLAY ": props.todos.map((todo)=> {
            return <>
            <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
          </>
          })
          }
            
      
      
    </div>
  )
}

export default Todos
