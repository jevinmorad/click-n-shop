import React from 'react';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <div className="w-[464px] h-[36px] flex justify-center items-center">
            <div className="text-center text-sm font-normal">
                <Link to="/" className="px-4 py-2 hover:bg-gray-300 rounded-full">
                    Home
                </Link>
                <Link to="/" className="px-4 py-2 hover:bg-gray-300 rounded-full">
                    Profile
                </Link>
                <Link to="/" className="px-4 py-2 hover:bg-gray-300 rounded-full">
                    Category
                </Link>
            </div>
            <div className="ml-5">
                <button class="bg-gray-700 text-white font-bold py-1 px-3 rounded inline-flex items-center">
                    <LiaShoppingCartSolid size={'1.5em'}/>
                    <span className='pl-2'>Your Cart</span>
                </button>
                </div>
        </div>
    );
};

export default MenuBar;
