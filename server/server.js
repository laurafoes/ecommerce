import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import products from "./data/products.js";

dotenv.config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/product/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

const PORT = process.env.PORT || 5000;
const ENVIROMENT = process.env.NODE_ENV;

app.listen(
    PORT,
    console.log(`Server running in ${ENVIROMENT} mode on port ${PORT}`)
);
