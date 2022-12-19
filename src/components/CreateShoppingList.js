import React, { useState } from "react";
import ShoppingListContext from "./ShoppingListContext";
import ShoppingListSummary from "./ShoppingListSummary";
import SubmitShoppingList from "./SubmitShoppingList";
import {items} from "../data/data";

/*
    This component is responsable for looping through all the ingredients and then displaying them in a list.
    The user will then be able to click on the food them want. Once them have clicked on the food them want the handleClick
    function will be called and the selected item will be added to a list. After this ShoppingListContext, ShoppingListSummary and
    SubmitShoppingList will be called.The user will then enter their name into the text box
    and click submit which will then save the list into the browers localstorage 
*/

const CreateShoppingList = () => {
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
