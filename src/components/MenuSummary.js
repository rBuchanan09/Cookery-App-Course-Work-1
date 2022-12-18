import React, { useContext } from "react";
import MenuContext from "./MenuContext";

export default function OrderSummary() {
    const [order, setOrder] = useContext(MenuContext);
    const removeItem = (e, item) => {
        let updatedOrder = order.filter((elememt) => {
            return elememt !== item;
        });
        setOrder(updatedOrder);
    };

    return (
        <div>
            <h2>Selected Recipes</h2>
            <ul>
                {order.map((item, index) => (
                    <li key={index} onClick={(e) => removeItem(e, item)}>
                        <h4>{item}</h4>
                    </li>
                ))}
            </ul>
        </div>
    );
}