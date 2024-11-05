import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import { Outlet } from 'react-router-dom'
const RootLayout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="bg-gray-100 min-h-[calc(100vh-372.8px)]">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default RootLayout;