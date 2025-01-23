import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"

export default function Layout() {
    return (
        <>
            <header className="container px-14 py-2 border-b-200">
                <Header />
            </header>
            <main className="px-14">
                <Outlet />
            </main>
            {/* <footer className="bg-gray-300">
                <p>&copy; 2021</p>
            </footer> */}
        </>
    )
}

