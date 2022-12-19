import React, { useContext } from "react";
import MenuContext from "./MenuContext";

/*
     This component is responsable for creating the summary for creating a menu
*/

export default function OrderSummary() {
    // creates a context for the orders
    const [order, setOrder] = useContext(MenuContext);
    // this function will allow the user to remove a selected item
    const removeItem = (e, item) => {
         // filters through the orders and passing element as paramater then returns if the element is not equal to the item
        let updatedOrder = order.filter((elememt) => {
            return elememt !== item;
        });
        // updates the order list
        setOrder(updatedOrder);
    };

    /* below will loop through the list and will allow the user to remove items from the list. It will then display
       the updated item
    */
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