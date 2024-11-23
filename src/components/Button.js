import React, { Children } from "react";
import "./Button.css";

const Button = ({ onClick, Children}) =>{
    return(
        <button className="btn" onClick={onClick}>
            {Children}
        </button>
    );
};

export default Button;