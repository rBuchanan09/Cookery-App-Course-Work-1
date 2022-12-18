import React, { useState } from "react";
import ShoppingListContext from "./ShoppingListContext";
import ShoppingListSummary from "./ShoppingListSummary";
import SubmitShoppingList from "./SubmitShoppingList";
import {items} from "../data/data";

const CreateShoppingList = ({food}) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const handleClick = (e, selectedItem) => {
        let newState = [...selectedItems, selectedItem];
        setSelectedItems(newState);
        console.log(selectedItems);
    };

    console.log(items);
    return (
        <>
            <div className="container-fluid">
            <h1>Select Ingredients</h1>
                <div className="row">
                    <div className="col-2 submenu">
                        <h2>Ingredients</h2>
                        <ul>
                            {items.map((food) => {
                                return (
                                    <li key={food.id}>
                                        {food.ingredients.map(ingredient => (
                                            <li onClick={(e) => handleClick(e, ingredient)}>{ingredient}</li>
                                        ))}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <ShoppingListContext.Provider value={[selectedItems, setSelectedItems]}>
                        <div className="col-4">
                            <ShoppingListSummary />
                        </div>
                        <div className="col-6">
                            <SubmitShoppingList />
                        </div>
                    </ShoppingListContext.Provider>
                </div>
            </div>
        </>
    );
};
export default CreateShoppingList; 
