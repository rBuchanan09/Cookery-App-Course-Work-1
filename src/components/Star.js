import React from "react";
import { FaStar } from "react-icons/fa";

export default function Star(props) {
    console.log(props.selected);
    return <FaStar
            color = {props.selected ? "green" : "grey"}
            onClick={props.onSelect}
            />;
}