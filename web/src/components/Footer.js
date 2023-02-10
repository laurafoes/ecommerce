import React from "react";
import { Container, Grid } from "@mui/material";

const Footer = () => {
    return (
        <footer>
            <Container maxWidth={false} sx={{ width: "100vw", paddingX: "0" }}>
                <Grid container>
                    <Grid
                        item
                        sx={{
                            width: "100vw",
                            paddingX: "0",
                            textAlign: "center",
                            paddingY: "3rem",
                        }}
                    >
                        Copyright &copy; ProShop
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
