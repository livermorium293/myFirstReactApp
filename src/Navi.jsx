import React, {useState } from 'react';
import ReactDOM from 'react-dom';

import { App } from "./App"
import { App2} from "./App2"

// import "./Navi.css"

export const Navi = () => {
    const [buttonName, setButtonName] = useState("TODO管理を始める!");

    const onClickCreateApp = () => {
        


        if (buttonName === "TODO管理を始める!") {
            setButtonName("TODO管理をやめる!");
            ReactDOM.render(<App />, document.getElementById("root"))
        }else{
            setButtonName("TODO管理を始める!");
            ReactDOM.render(<App2 />, document.getElementById("root"))
        }


    };

    return (
        <>
            <div className="navi-area">
                <button onClick={onClickCreateApp}>{buttonName}</button>
                
            </div>
        </>
    )


};
