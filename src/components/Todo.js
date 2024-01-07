import React from 'react'

export default function Todo(props) {
  let style={
     width: "18rem",
  }
  return (
   <>
    <div className="card" style={style}>
  <div className="card-body">
    <h5 className="card-title">{props.todo.title}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{props.todo.desc}</h6>
    <button  onClick={()=>{props.onDelete(props.todo)}} className="card-link">Delete</button>
  </div>
</div>
   </>
  )
}
