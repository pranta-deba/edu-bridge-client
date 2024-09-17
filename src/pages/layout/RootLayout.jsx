import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import { Outlet } from 'react-router-dom'
const RootLayout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default RootLayout;