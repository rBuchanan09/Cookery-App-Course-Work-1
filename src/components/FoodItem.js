import React from "react";
import Stars from "./Stars";
import Accordion from "react-bootstrap/Accordion";

/*
    This component is responsable for displaying the name, description, price and the ingredients for the recipes.
    It does this by getting the data that was passed into FoodItem after it was called from another component and then
    using . to access the object we want to display. The ingredients are displayed by looping through them all then displaying
    them for each item. 
*/

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