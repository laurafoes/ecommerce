import React from "react";
import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";

const Product = ({ product }) => {
    console.log(product);
    return (
        <Card
            varian="outlined"
            elevation={6}
            sx={{
                padding: "1rem",
                borderRadius: "8px",
                letterSpacing: "0.08rem",
                height: "100%",
            }}
        >
            <CardMedia
                sx={{ height: 200, borderRadius: 2 }}
                component="img"
                image={product.image}
                title="product photo"
            />
            <CardContent>
                <Link
                    href={`/product/${product._id}`}
                    sx={{ textDecoration: "none" }}
                >
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                            color: "black",
                            fontSize: 18,
                            letterSpacing: "0.15rem",
                            fontWeight: "bold",
                            marginBottom: 4,
                        }}
                    >
                        {product.name}
                    </Typography>
                </Link>
                <Typography variant="body" color="text.secondary">
                    {product.rating} from {product.numReviews} reviews
                </Typography>
                <Typography
                    variant="h5"
                    sx={{ fontWeight: "bolder", marginTop: 4 }}
                >
                    $ {product.price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Product;
