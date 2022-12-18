import React, { useCallback, useEffect, useState } from "react";
import Nutrition from "./Nutrition";

const FetchData = ({query}) => {
    const [nutrition, setNutrition] = useState(
      {
        sugar_g: " ",
        fiber_g: " ",
        serving_size_g: " ",
        sodium_mg: " ",
        name: " ",
        potassium_mg: " ",
        fat_saturated_g: " ",
        fat_total_g: " ",
        calories: " ",
        cholesterol_mg: " ",
        protein_g: " ",
        carbohydrates_total_g: " ",
      },
    );

    const fetchData = useCallback(() => {
        const url =  "https://calorieninjas.p.rapidapi.com/v1/nutrition?query="+query;
        console.log(url);
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "b06af03314mshdeb01987ce44ae6p1a2ffejsn3bd4f86ce357",
		        "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com"
            },
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((incomingData) => {
                console.log(incomingData);
                if(incomingData.items.length !== 0) {
                    setNutrition(incomingData.items[0]);
                }
            });
    }, [query]);

    useEffect(() => {
        fetchData();
    }, [fetchData, query]);

    return (
        <div>
            <div>
                <Nutrition item={nutrition} />
            </div>
        </div>
    );
};
export default FetchData; 