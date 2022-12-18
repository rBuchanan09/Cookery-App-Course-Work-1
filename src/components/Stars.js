import React, { useState, useEffect } from "react";
import Star from "./Star";
import { createArray } from "./lib";

export default function StarRating({ totalStarts = 5}) {
    const [selectedStars, setSelectedStars] = useState(() => {
        const saved = localStorage.getItem("selectedStars");
        const initialValue = JSON.parse(saved);
        return initialValue || 0;
    });
  
    useEffect(() => {
        // storing selected value
        localStorage.setItem("selectedStars", JSON.stringify(selectedStars));
    }, [selectedStars]);

    return (
        <div>
            {createArray(totalStarts).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                    />
            ))}
            <p>{selectedStars} of {totalStarts} stars</p>
        </div>
    );
}