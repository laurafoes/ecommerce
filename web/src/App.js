import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <CssBaseline>
            <Header />
            <main>
                <Container
                    sx={{
                        paddingY: "1rem",
                        paddingX: "5rem",
                        maxWidth: "1200px",
                    }}
                    disableGutters
                >
                    <h1>Welcome to ProShop</h1>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </CssBaseline>
    );
}

export default App;
