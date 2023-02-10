import React from "react";
import { grey, lightBlue } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container, Typography, Box, Link } from "@mui/material";

const Header = () => {
    return (
        <header>
            <Container
                disableGutters
                maxWidth={false}
                sx={{
                    backgroundColor: lightBlue[300],
                    width: "100vw",
                    height: "10vh",
                    paddingX: "5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box>
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
                </Box>
                <Box sx={{ display: "flex" }}>
                    <Link
                        href="#"
                        underline="none"
                        sx={{
                            paddingX: "1rem",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
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
                        href="#"
                        underline="none"
                        sx={{
                            paddingX: "1rem",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
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
