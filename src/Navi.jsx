import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react/cjs/react.development';

import { App } from "./App"
import { App2 } from "./App2"

export const Navi = () => {
    useEffect(()=>{
        ReactDOM.render(<App2 />, document.getElementById("root"))
    },[])

    const onClickCreateApp = () => {
            ReactDOM.render(<App />, document.getElementById("root"))
    };
    const onClickCreateApp2 = () => {
            ReactDOM.render(<App2 />, document.getElementById("root"))
    };
    return (
        <>
            <div className="navi-area">
                <button className="navibutton" onClick={onClickCreateApp}>Start Todo</button>
                <button className="navibutton" onClick={onClickCreateApp2}>Hello World</button>
            </div>
        </>
    )
};
