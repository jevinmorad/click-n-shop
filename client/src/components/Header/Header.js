import preview from '../../assets/images/Preview.png';
import Search from './Search';
import Menu from './Menu';
import Categories from './Categories';

export default function Header() {
    return (
        <header className="flex items-center justify-between px-4">

            {/* Logo Section */}
            <div className="logo flex-shrink-0">
                <img src={preview} alt="Logo" className="w-20 h-16 object-cover" />
            </div>

            {/* Categories Section */}
            <nav className='mx-4'>
                <Categories/>
            </nav>

            {/* Search Section */}
            <div className="search flex-grow mx-4">
                <Search />
            </div>

            {/* Menu Section */}
            <div className="menu flex-shrink-0">
                <Menu />
            </div>
        </header>
    );
}