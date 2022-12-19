import React from "react";
import { Link, Outlet } from "react-router-dom";

/*
    This component is responsable for allowing the user to naviage to the different pages by clicking on the links 
*/

const Navigation = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/createmenu">Create Menu</Link>
                </li>
                <li>
                    <Link to="/createshoppinglist">Create Shopping List</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    );
};
export default Navigation;