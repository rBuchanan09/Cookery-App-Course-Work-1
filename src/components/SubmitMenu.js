import React, { useContext, useState, useEffect } from "react";
import MenuContext from "./MenuContext";

const SubmitMenu = () => {
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
        let newOrder = [nameFieldMenu, ...order];
        const orderString = JSON.stringify(newOrder);

        setMessageMenu(
                "Hi " + nameFieldMenu + " thank you for your order. You've ordered " + order
        );
        setMenuOrder([]);
        setNameMenuField("");
    };

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