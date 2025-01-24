import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"

export default function Layout() {
    return (
        <>
            <header className="container px-4 sm:px-8 md:px-12 lg:px-14 py-2 shadow-md">
                <Header />
            </header>
            <main className="px-4 sm:px-8 md:px-12 lg:px-14">
                <Outlet />
            </main>
            <footer className="bg-gray-300 px-4 sm:px-8 md:px-12 lg:px-14 py-4">
                <p>&copy; 2021</p>
            </footer>
        </>
    )
}

