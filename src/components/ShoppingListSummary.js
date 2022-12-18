import React, { useContext } from "react";
import ShoppingListContext from "./ShoppingListContext";

export default function ShoppingListSummary() {
    const [order, setOrder] = useContext(ShoppingListContext);
    const removeItem = (e, item) => {
        let updatedOrder = order.filter((elememt) => {
            return elememt !== item;
        });
        setOrder(updatedOrder);
    };

    return (
        <div>
            <h2>Selected Ingredients</h2>
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