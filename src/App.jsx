/* eslint react-hooks/exhaustive-deps: off*/

import React, { useState, useEffect } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);


  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  useEffect(() => {
    try {
      var loadedIncompleteTodos = [localStorage.getItem("savedIncompleteTodos")]
      loadedIncompleteTodos = JSON.parse(loadedIncompleteTodos);
      setIncompleteTodos(loadedIncompleteTodos);
    } catch {
    }

    try {
      var loadedCompleteTodos = [localStorage.getItem("savedCompleteTodos")]
      loadedCompleteTodos = JSON.parse(loadedCompleteTodos);
      setCompleteTodos(loadedCompleteTodos);
    } catch {
    }
  }, [])




  const onClickAdd = () => {
    if (todoText === "") return;
    if (incompleteTodos.length < 5) {
      const newTodos = [...incompleteTodos, todoText + "!"];
      localStorage.setItem("savedIncompleteTodos", JSON.stringify(newTodos))
      setIncompleteTodos(newTodos);
      setTodoText("");
    } else {
      alert("Todoを消化しろ!!");
    }
  };

  const onClickDelete = (index) => {
    // alert("ahoaho")  
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);// spliceの第一引数はどこからを指定。第二引数はいくつ削除するかを指定
    localStorage.setItem("savedIncompleteTodos", JSON.stringify(newTodos))
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const completedTodo = incompleteTodos[index];
    const newTodos = [...completeTodos, completedTodo];
    localStorage.setItem("savedCompleteTodos", JSON.stringify(newTodos));
    setCompleteTodos(newTodos);
    onClickDelete(index);
  };

  const onClickBack = (index) => {
    const incompleteTodo = completeTodos[index];
    // alert(incompleteTodo);
    const newTodos = [...incompleteTodos, incompleteTodo];
    localStorage.setItem("savedIncompleteTodos", JSON.stringify(newTodos))
    setIncompleteTodos(newTodos);
    const updateTodos = [...completeTodos];
    updateTodos.splice(index, 1);
    localStorage.setItem("savedCompleteTodos", JSON.stringify(updateTodos));
    setCompleteTodos(updateTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />

      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos
        completeTodos={completeTodos}
        onClickBack={onClickBack}
      />
    </>
  );
};

