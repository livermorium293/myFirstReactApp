import React from "react";

export const ColorfulMessage = (props) => {

    const {color,children} = props;//分割代入

    const contentStyle = {
        color, //color: colorとなるところを省略している。
        fontSize:"18px",
      };

    return(
        <p style = {contentStyle}>{children}</p>
    );
};