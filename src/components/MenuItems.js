import React, { useState } from "react";
import MenuContext from "./MenuContext";
import MenuSummary from "./MenuSummary";
import SubmitMenu from "./SubmitMenu";
import {items} from "../data/data";

/*
    This component is responsable for looping through all the recipes and then displaying them in a list.
    The user will then be able to click on the food them want. Once them have clicked on the food them want the handleClick
    function will be called and the selected item will be added to a list. After this MenuContext, MenuSummary and
    SubmitMenu will be called.The user will then enter their name into the text box
    and click submit which will then save the list into the browers localstorage 
*/

const MenuItems = () => {
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
                <div className="row">
                    <div className="col-2 submenu">
                        <h2>Menu</h2>
                        <ul>
                            {items.map((food) => {
                                return (
                                    <li key={food.id} onClick={(e) => handleClick(e, food.name)}>
                                    <h4>{food.name}</h4>
                                </li>
                                );
                            })}
                        </ul>
                    </div>
                    <MenuContext.Provider value={[selectedItems, setSelectedItems]}>
                        <div className="col-4">
                            <MenuSummary />
                        </div>
                        <div className="col-6">
                            <SubmitMenu />
                        </div>
                    </MenuContext.Provider>
                </div>
            </div>
        </>
    );
};
export default MenuItems; 
