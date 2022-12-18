import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import FoodItem from "./FoodItem";
import FetchNutrition from "./FetchNutrition";

const Category = ({categoryList, category}) => {
    const [selectedItem, setSelectedItem] = useState("");

    const handleClick = (e) => {
        setSelectedItem(e.target.innerHTML);
        console.log(selectedItem);
    }
   
    return (
        <>
            <h3>{category}</h3>
            <Accordion style={{width:50+'%'}}>
                {categoryList.map((food, index) => {
                    return (
                        <>
                        <Accordion.Item key={index} eventKey={index} onClick={handleClick}>
                            <FoodItem food={food} />
                        </Accordion.Item>
                        
                        <Accordion.Item key={food.id} eventKey={index} onClick={handleClick}>
                        <Accordion.Header>View Nutrition</Accordion.Header>
                                <Accordion.Body>
                                    <FetchNutrition query={selectedItem} />
                                </Accordion.Body>
                        </Accordion.Item>
                        </>
                    )
                })}  
            </Accordion>
        </>
    )
};
export default Category;