import React, { useState } from "react";
import MenuContext from "./MenuContext";
import MenuSummary from "./MenuSummary";
import SubmitMenu from "./SubmitMenu";
import {items} from "../data/data";

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
