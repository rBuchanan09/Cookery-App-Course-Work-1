import React from "react";
import MenuItems from "./MenuItems";

/*
    This component is responsable for displaying the menu items for the recipes which will be the name of the recipes
    It does this by calling menu items.
*/

const CreateMenu = () => {
    return (
        <div>
             <h1>Select Menu Items</h1>
             <MenuItems />
        </div>
    );
};
export default CreateMenu;