import React from "react";
import { blueGrey, grey } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Container
                disableGutters
                maxWidth={false}
                sx={{
                    backgroundColor: blueGrey[500],
                    width: "100vw",
                    height: "10vh",
                    paddingX: "5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Typography
                            variant="h6"
                            color={grey[900]}
                            sx={{
                                textTransform: "uppercase",
                                letterSpacing: "0.5rem",
                            }}
                        >
                            Proshop
                        </Typography>
                    </Link>
                </Box>
                <Box sx={{ display: "flex", gap: 3 }}>
                    <Link
                        to="/cart"
                        underline="none"
                        style={{
                            color: "beige",
                            paddingX: "1rem",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                        }}
                    >
                        <ShoppingCartIcon
                            fontSize="inherit"
                            sx={{
                                marginRight: "0.25rem",
                            }}
                        />
                        Cart
                    </Link>
                    <Link
                        to="/login"
                        underline="none"
                        style={{
                            color: "beige",
                            paddingX: "1rem",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                        }}
                    >
                        <PersonIcon
                            fontSize="inherit"
                            sx={{
                                marginRight: "0.25rem",
                            }}
                        />
                        Sign In
                    </Link>
                </Box>
            </Container>
        </header>
    );
};

export default Header;
