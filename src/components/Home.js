import React from "react";
import Search from "./Search";
import {items} from "../data/data";

/*
    This component is responsable for calling Search and then passing in the items as a paramter when Search is called.
    This is also the home page. The list of recipes with their names, description etc will all be displayed here. Along with
    the nutritional data.
*/

const Home = () => {
    return (
        <div className="container">
        <h1>Search For A Recipe</h1>
          <Search details={items}/>
        </div>
    );
};
export default Home; 