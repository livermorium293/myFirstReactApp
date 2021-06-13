/* eslint react-hooks/exhaustive-deps: off*/
import React, { useEffect, useState } from "react";
// import {ColorfulMessage} from "./components/ColorfulMessage"; 

export const App2 = () =>{

  const [num, setNum] = useState(0); //numは変数、setNumは更新関数
  const [ahoahoShowFlag, setAhoahoShowFrag] = useState(false);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickSwithShowFlag = () => {
    setAhoahoShowFrag(!ahoahoShowFlag);
  };

  useEffect(() => {
    if (num>0){
      if (num%3 === 0){
        ahoahoShowFlag || setAhoahoShowFrag(true);
      } else{
        ahoahoShowFlag && setAhoahoShowFrag(false);
      }
    }  
  }, [num]);//第二引数に与えた関数に関心を持つ関数となる。

  return (
      <>
        <h1 style = {{ color: "black" }}>Hello World</h1>
        {/* <ColorfulMessage color="black"> お元気ですよね?</ColorfulMessage>  */}
        {/* <ColorfulMessage color="pink"> 元気です</ColorfulMessage> */}
        <button onClick={onClickButton}>カウントアップ</button>
        <button onClick={onClickSwithShowFlag}>on/off</button>
        <p>{num}</p>
        {ahoahoShowFlag &&<p>あほあほ</p>}
      </>
    );
  };
  
