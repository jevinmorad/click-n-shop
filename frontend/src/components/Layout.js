import { Outlet } from "react-router-dom"
import Navbar from "./navbar/Navbar"
export default function Layout() {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>&copy; 2021</p>
            </footer>
        </>
    )
}

