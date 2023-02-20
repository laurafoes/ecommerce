import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import HomePage from "../pages/HomePage";
import App from "../App";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
