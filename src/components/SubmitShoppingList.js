import React, { useContext, useState, useEffect } from "react";
import ShoppingListContext from "./ShoppingListContext";

const SubmitShoppingList = () => {
    // creating a context for the order 
    const [order, setOrder] = useContext(ShoppingListContext);
    const [nameField, setNameField] = useState(() => {
         // getting stored value
         const saved = localStorage.getItem("nameField");
         const initialValue = JSON.parse(saved);
         return initialValue || "";
    });

    const [message, setMessage] = useState(() => {
        // getting stored
        const saved = localStorage.getItem("message");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
  
    useEffect(() => {
        // storing selected value
        localStorage.setItem("nameField", JSON.stringify(nameField));
        localStorage.setItem("message", JSON.stringify(message));
    }, [nameField, message]);

    const addOrder = () => {
        // getting the new order
        let newOrder = [nameField, ...order];
        const orderString = JSON.stringify(newOrder);

        // setting the output message with the name and orders
        setMessage(
                "Hi " + nameField + " thank you for your order. You've ordered " + order
        );
        // settings order function to an empty array
        setOrder([]);
        // setting name function to an empty string
        setNameField("");
    };

    // this will store the name entered and then call the add order function after the submit order button has been clicked
    // it will then display the output message showing the name and the items selected
    return (
        <div>
            <h2>Submit Order</h2>
            <label>Enter your name: </label>
            <input 
                className="form-control"
                type="text"
                placeholder="Enter your name here ..."
                value={nameField}
                onChange={(e) => setNameField(e.target.value)}
                />
                <button onClick={addOrder}>Submit Order</button>
                <h3>Privous Orders</h3>
                <h4>{message}</h4>
        </div>   
    )
};
export default SubmitShoppingList;