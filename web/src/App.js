import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "@mui/material";
import { CssBaseline } from "@mui/material";
import HomePage from "./pages/HomePage";

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
                    <HomePage />
                </Container>
            </main>
            <Footer />
        </CssBaseline>
    );
}

export default App;
