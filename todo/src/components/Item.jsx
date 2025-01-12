import React from "react";
import "../App.css";



const Item = (props) => {
    return (
        <li className="Item">
            <span>
                <input type="checkbox" className="check"/>
                <span> {props.text} </span>
            </span>
            <p>...</p>
        </li>
    );
};

export default Item;