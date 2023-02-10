import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "@mui/material";
import { CssBaseline } from "@mui/material";

function App() {
    return (
        <CssBaseline>
            <Header />
            <main>
                <Container
                    sx={{ paddingY: "1rem", paddingX: "5rem" }}
                    disableGutters
                    maxWidth={false}
                >
                    <h1>Welcome to ProShop</h1>
                </Container>
            </main>
            <Footer />
        </CssBaseline>
    );
}

export default App;
