import logo from './logo.png';
import preview from './Preview.png';
import Search from './search';
import Menu from './menu';

export default function NavBar() {

    return (
        <nav className='mx-7'>
            <div className="flex-auto h-16 flex items-center justify-between px-4">
                <div className="logo w-[464px]">
                    <img src={preview} alt="Logo" className='w-20 h-16' />
                </div>
                <div className="search ">
                    <Search />
                </div>
                <div className="menu">
                    <Menu />
                </div>
            </div>
        </nav>
    )
}