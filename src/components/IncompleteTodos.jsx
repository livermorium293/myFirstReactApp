import React from "react";

export const IncompleteTodos = (props) => {

    const { incompleteTodos, onClickComplete, onClickDelete } = props;
    return (
        <div className="incomplete-area">
            <p className="title">未完了のTODO</p>
            <ul>
                {incompleteTodos.map((todo, index) => {
                    return (
                        <>
                            <div key={todo} className="list-row">
                                <li>{todo}</li>
                                <button className="incomplete-area" onClick={() => onClickComplete(index)}>できた！</button>
                                <button className="incomplete-area" onClick={() => onClickDelete(index)}>やらないことにする</button>{/* 関数に引数を渡すと勝手に実行されるので、アロー関数の中に入れておく*/}
                            </div>
                        </>
                    );
                })}
            </ul>
        </div>
    );

}