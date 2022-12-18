import React from "react";
import Search from "./Search";
import {items} from "../data/data";

const Home = () => {
    return (
        <div className="container">
        <h1>Search For A Recipe</h1>
          <Search details={items}/>
        </div>
    );
};
export default Home; 