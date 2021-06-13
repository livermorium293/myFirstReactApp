/* eslint react-hooks/exhaustive-deps: off*/

import React, { useState } from "react";


export const App = () => {
  const [todoText,setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if(todoText==="") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    // alert("ahoaho")  
    const newTodos=[...incompleteTodos];
    newTodos.splice(index, 1);// spliceの第一引数はどこからを指定。第二引数はいくつ削除するかを指定
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const completedTodo = incompleteTodos[index];
    const newTodos = [...completeTodos,completedTodo];
    setCompleteTodos(newTodos);
    onClickDelete(index);
  };

  const onClickBack = (index) => {
    const incompleteTodo = completeTodos[index];
    // alert(incompleteTodo);
    const newTodos = [...incompleteTodos,incompleteTodo];
    setIncompleteTodos(newTodos);
    const updateTodos = [...completeTodos];
    updateTodos.splice(index,1);
    setCompleteTodos(updateTodos);
  };

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo,index) => {
            return (
              <>
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button onClick={()=>onClickComplete(index)}>完了</button>
                  <button onClick={()=>onClickDelete(index)}>削除</button>{/* 関数に引数を渡すと勝手に実行されるので、アロー関数の中に入れておく*/}
                </div>
              </>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo,index) => {
            return (
              <>
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button onClick={()=>onClickBack(index)}>戻す</button>
                </div>
              </>
            )
          })}
        </ul>
      </div>
    </>
  );
};

