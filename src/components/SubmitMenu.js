import React, { useContext, useState, useEffect } from "react";
import MenuContext from "./MenuContext";

const SubmitMenu = () => {
    // creating a context for the order 
    const [order, setMenuOrder] = useContext(MenuContext);
    const [nameFieldMenu, setNameMenuField] = useState(() => {
         // getting stored value
         const saved = localStorage.getItem("nameFieldMenu");
         const initialValue = JSON.parse(saved);
         return initialValue || "";
    });

    const [messageMenu, setMessageMenu] = useState(() => {
        // getting stored
        const saved = localStorage.getItem("messageMenu");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
  
    useEffect(() => {
        // storing selected value
        localStorage.setItem("nameFieldMenu", JSON.stringify(nameFieldMenu));
        localStorage.setItem("messageMenu", JSON.stringify(messageMenu));
    }, [nameFieldMenu, messageMenu]);

    const addMenuItems = () => {
        // getting the new order
        let newOrder = [nameFieldMenu, ...order];
        const orderString = JSON.stringify(newOrder);

        // setting the output message with the name and orders
        setMessageMenu(
                "Hi " + nameFieldMenu + " thank you for your order. You've ordered " + order
        );
        // settings order function to an empty array
        setMenuOrder([]);
        // setting name function to an empty string
        setNameMenuField("");
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
                value={nameFieldMenu}
                onChange={(e) => setNameMenuField(e.target.value)}
                />
                <button onClick={addMenuItems}>Submit Order</button>
                <h3>Privous Orders</h3>
                <h4>{messageMenu}</h4>
        </div>   
    )
};
export default SubmitMenu;