import React from "react";
import Stars from "./Stars";
import Accordion from "react-bootstrap/Accordion";

const FoodItem = ({food}) => {
    return (
            <div>
                <Accordion.Header>{food.name}</Accordion.Header>
                <Accordion.Body>
                    <p>{food.description}</p>
                    <p>Price: £{food.price}</p>
                    <h4>Ingredients:</h4>
                    <ul>
                        {food.ingredients && food.ingredients.map(ingredient => (
                            <li>{ingredient}</li>
                        ))}
                    </ul>
                    <Stars />
                </Accordion.Body>
             </div>
    );
};
export default FoodItem; 