import React, { useState } from "react";
import DisplayFoodItems from "./DisplayFoodItems";

/*
    This component is responsable for searching the recipes
*/

export default function Search({details}) {
    const [searchString, setSearchString] = useState("");

    // filters the search based on the names and ingredients
    const filtered = details.filter((entry) => {
        return entry.name.toLowerCase().includes(searchString.toLocaleLowerCase()) || entry.ingredients.toString().toLowerCase().includes(searchString.toLocaleLowerCase());
    });

    /* below allow the user to enter the name or ingredients they want to search for into the search box
       after the user has search the updated list will display with what they have searched for
    */
    return (
        <div>
            <div style={{width:50+'%'}}>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search ..."
                    onChange={(e) => setSearchString(e.target.value)}
                    />
            </div>
            
            <DisplayFoodItems foodList={filtered} />
        </div>
    );
}