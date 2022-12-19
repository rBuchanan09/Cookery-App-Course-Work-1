import React, { useState, useEffect } from "react";
import Star from "./Star";
import { createArray } from "./lib";

/*
    This component is responsable for handling the star ratings. 
*/

// function sets totalStars to 5
export default function StarRating({ totalStars = 5}) {
     // getting stored value
    const [selectedStars, setSelectedStars] = useState(() => {
        const saved = localStorage.getItem("selectedStars");
        const initialValue = JSON.parse(saved);
        return initialValue || 0;
    });
  
    useEffect(() => {
        // storing selected value
        localStorage.setItem("selectedStars", JSON.stringify(selectedStars));
    }, [selectedStars]);

    /* the below code is looping through the number of stars it will then pass the index in as the key value
       the code will then check to see if the selected star is greater than the index 
       the code will then call the setSelectedStars function will add one onto the index and then store the result into
       onSelect
       The last thing the code will do is display the amount of stars selected
    */
    return (
        <div>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                    />
            ))}
            <p>{selectedStars} of {totalStars} stars</p>
        </div>
    );
}