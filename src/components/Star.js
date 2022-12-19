import React from "react";
import { FaStar } from "react-icons/fa";

/*
     This component is responsable for creating the star icon. The code will set the color as green if selected
     and grey if not selected
     The function will then store the input into onClick from the call in Stars
*/

export default function Star(props) {
    console.log(props.selected);
    return <FaStar
            color = {props.selected ? "green" : "grey"}
            onClick={props.onSelect}
            />;
}