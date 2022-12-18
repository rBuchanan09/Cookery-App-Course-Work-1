import React, { useState } from "react";
import DisplayFoodItems from "./DisplayFoodItems";

export default function Search({details}) {
    const [searchString, setSearchString] = useState("");

    const filtered = details.filter((entry) => {
        return entry.name.toLowerCase().includes(searchString.toLocaleLowerCase()) || entry.ingredients.toString().toLowerCase().includes(searchString.toLocaleLowerCase());
    });

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