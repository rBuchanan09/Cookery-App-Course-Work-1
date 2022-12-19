import React from "react";
import Category from "./Category";

/*
    This component is responsable for displaying the menu items that will be filtered by their category and
    if they are available.
*/

const DisplayFoodItems = ({foodList}) => {

    // this function checks to see if the item is available by check if the available object is equal to yes
    const availableList = foodList.filter((entry) => {
        return entry.available === "yes";
    });

    return (
        <div>
            <Category category="Snacks" categoryList={availableList.filter((entry) => {return entry.category==="snack"})} />
            <Category category="Starters" categoryList={availableList.filter((entry) => {return entry.category==="starter"})} />
            <Category category="Mains" categoryList={availableList.filter((entry) => {return entry.category==="main"})} />
            <Category category="Desserts" categoryList={availableList.filter((entry) => {return entry.category==="dessert"})} />
            <Category category="Side" categoryList={availableList.filter((entry) => {return entry.category==="side"})} />
            <Category category="Hot Drinks" categoryList={availableList.filter((entry) => {return entry.category==="hot drinks"})} />
        </div>
    )
};
export default DisplayFoodItems; 