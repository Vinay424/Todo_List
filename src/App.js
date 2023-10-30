import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./MyComponents/header";

import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null){
    initTodo=[];

  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am on delete!", todo);
    setCount(
      todosList.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos",JSON.stringify(todosList));
  };
  const addTodo = (title, desc) => {
    //console.log("Im adding this to do", title, desc);
    let sno;
    if (todosList.length == 0) {
      sno = 0;
    } else {
       sno = todosList[todosList.length - 1].sno;
    }
    const myTodo = {
      sno: sno + 1,
      title: title,
      desc: desc,
    };
    setCount([...todosList, myTodo]);
    console.log(myTodo);
  };
  const [todosList, setCount] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todosList));
  },[todosList])

  return (
    <>
      <Header title="My todo list" search={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todosList} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
