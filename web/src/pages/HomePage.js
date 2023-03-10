import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios
                .get("http://localhost:5000/api/products")
                .catch(function (error) {
                    console.log(JSON.stringify(error));
                });

            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <>
            <h1>Welcome to ProShop</h1>
            <Typography
                variant="h6"
                component="h1"
                sx={{
                    textTransform: "uppercase",
                    letterSpacing: "0.25rem",
                    marginLeft: 2,
                    marginY: 4,
                }}
            >
                Latest Products
            </Typography>
            <Grid container spacing={2} sx={{ marginX: "auto", width: "100%" }}>
                {products.map((product) => (
                    <Grid item key={product._id} sm={12} md={6} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default HomePage;
