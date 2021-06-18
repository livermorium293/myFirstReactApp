import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { App } from "./App"
import { App2 } from "./App2"

// import "./Navi.css"

export const Navi = () => {
    const [buttonName, setButtonName] = useState("TODO管理を始める!");
    const [buttonName2, setButtonName2] = useState("Hello World!");

    const onClickCreateApp = () => {
            // alert("あほあほ")
            // setButtonName("TODO管理をやめる!");
            ReactDOM.render(<App />, document.getElementById("root"))
    };

    const onClickCreateApp2 = () => {
            // setButtonName2("GodByeWorld!");
            ReactDOM.render(<App2 />, document.getElementById("root"))
    };

    return (
        <>
            <div className="navi-area">
                <button onClick={onClickCreateApp}>{buttonName}</button>
                <button onClick={onClickCreateApp2}>{buttonName2}</button>
            </div>
        </>
    )


};
