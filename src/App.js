import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import Todo from './components/Todo';
import Addtodo from './components/Addtodo';
import Footer from './components/Footer';

function App() {
  const onDelete=(todo)=>{
      setTodos(todos.filter((e)=>{
        return e!==todo
      }))
  }
  let sno;
  const addTodo=(title,desc)=>{
    console.log("Adding a todo",title,desc)
    if(todos.length==0){
     sno=0
    }
    else{
     sno=todos[todos.length-1].sno+1
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)
  }
  const[todos,setTodos]=useState([
    
  ])

  return (
    <>
    <Header title="My Todo's list"/>
    <Addtodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
