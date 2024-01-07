import React, { useState } from 'react'

export default function Addtodo(props) {
    const form={
        width:"40%",
        height:"40%",
    }
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title||!desc){
            alert("Title or desc cannot be blank..")

        }
        else{
        props.addTodo(title,desc)
        }
    }
  return (
    <div>
        <h3 className='container'>Add todo in the list:</h3>
      <form onSubmit={submit} className="container"style={form}> 
    <label for="exampleInputEmail1" class="form-label">Todo's title:</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Enter the desc here:</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary btn-sm">Submit</button>
</form>
    </div>
  )
}
