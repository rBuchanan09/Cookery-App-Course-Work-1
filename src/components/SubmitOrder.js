import React, { useContext, useState, useEffect } from "react";
import OrderContext from "./OrderContext";

const items = [];
const SubmitOrder = () => {
    const [order, setOrder] = useContext(OrderContext);
    const [nameField, setNameField] = useState(() => {
         // getting stored value
         const saved = localStorage.getItem("nameField");
         const initialValue = JSON.parse(saved);
         return initialValue || "";
    });

    useEffect(() => {
        // storing selected value
        localStorage.setItem("nameField", JSON.stringify(nameField));
    }, [nameField]);

    const [message, setMessage] = useState("");
    //const [orderDetails, setOrderDetailsMessage] = useState();

    const addOrder = () => {
        let newOrder = [nameField, ...order];
        const orderString = JSON.stringify(newOrder);

        setMessage(
                "Hi " + nameField + " thank you for your order. You've ordered " + order + "\n"
        );
        //setOrderDetailsMessage(
          //      nameField + " You Ordered: \n" + order + "\n"
        //);
        setOrder([]);
        setNameField("");
       

        items.push(order);
        console.log("Items: " + items);
    };

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
                <p>{message}</p>
        
            <h3>Order details</h3>
        </div>   
    )
};
export default SubmitOrder;