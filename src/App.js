import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import NoPage from "./components/NoPage";
import Home from "./components/Home";
import CreateMenu from "./components/CreateMenu";
import CreateShoppingList from "./components/CreateShoppingList";

// This is used to connect everything together. This file is used to connect all the pages together.

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} >
        <Route path="/" element={<Home />} />
        <Route path="createmenu" element={<CreateMenu /> } />
        <Route path="createshoppinglist" element={<CreateShoppingList />} />
      </Route>
      <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
