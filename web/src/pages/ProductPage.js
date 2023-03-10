import {
    Button,
    Container,
    Divider,
    Grid,
    Paper,
    Rating,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
    const productId = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios
                .get(`http://localhost:5000/api/product/${productId.id}`)
                .catch(function (error) {
                    console.log(JSON.stringify(error));
                });

            setProduct(data);
        };
        fetchProduct();
    }, [productId, product]);

    return (
        <div>
            <Link to="/" style={{ textDecoration: "none", marginLeft: "24px" }}>
                <Button
                    type="button"
                    variant="outlined"
                    sx={{
                        textTransform: "uppercase",
                        borderColor: blueGrey[500],
                        color: blueGrey[500],
                    }}
                >
                    Go Back
                </Button>
            </Link>
            <Container style={{ marginTop: "16px" }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <img
                            src={product.image}
                            style={{ width: "100%", height: "100%" }}
                            alt="Product"
                        />
                    </Grid>
                    <Grid item xs={12} md={3} style={{ height: "100%" }}>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                                color: "black",
                                letterSpacing: "0.15rem",
                                fontWeight: "bold",
                                marginBottom: 4,
                                textDecoration: "none",
                                textTransform: "uppercase",
                            }}
                        >
                            {product.name}
                        </Typography>
                        <Divider sx={{ marginY: 2 }} />
                        <Typography
                            variant="body"
                            color="text.secondary"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Rating
                                name="half-rating"
                                defaultValue={product.rating}
                                precision={0.5}
                            />
                            &nbsp; {product.numReviews} reviews
                        </Typography>
                        <Divider sx={{ marginY: 2 }} />
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bolder", marginTop: 2 }}
                        >
                            Price: $ {product.price}
                        </Typography>
                        <Divider sx={{ marginY: 2 }} />
                        <Typography
                            variant="body"
                            color="text.secondary"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            {product.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} style={{ height: "100%" }}>
                        <TableContainer
                            component={Paper}
                            variant="outlined"
                            sx={{ paddingX: 2 }}
                        >
                            <Table
                                sx={{ width: "100%" }}
                                aria-label="Price and add to cart table"
                            >
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="left">
                                            Price:
                                        </TableCell>
                                        <TableCell align="right">
                                            {product.price}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">
                                            Status
                                        </TableCell>
                                        <TableCell align="right">
                                            {product.countInStock > 0
                                                ? "In Stock"
                                                : "Out Of Stock"}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>
                                            <Button
                                                type="button"
                                                disabled={
                                                    product.countInStock === 0
                                                }
                                                sx={{
                                                    backgroundColor:
                                                        blueGrey[500],
                                                    width: "100%",
                                                    color: "white",
                                                    padding: 1,
                                                    "&:hover": {
                                                        color: blueGrey[500],
                                                    },
                                                }}
                                            >
                                                Add to cart
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ProductPage;
