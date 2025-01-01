import React from 'react';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

export default function MenuBar () {
    return (
        <div className="h-[36px] flex justify-center items-center">
            <ul className="flex text-center text-sm font-normal">

                {/* Home */}
                <li className='border-r-2 border-black px-2'>
                    <Link to="/" className="px-4 py-2 align-middle hover:bg-gray-300 rounded-full">
                        Home
                    </Link>
                </li>

                {/* Profile */}
                <li className='border-r-2 border-black px-2'>
                    <Link to="/" className="px-4 py-2 align-middle hover:bg-gray-300 rounded-full">
                        Profile
                    </Link>
                </li>

                {/* Your Cart Button */}
                <li className="pl-6">
                    <button class="bg-gray-700 text-white font-bold py-1 px-2 rounded inline-flex items-center">
                        <LiaShoppingCartSolid size={'1.5em'} className='mr-2'/>
                        Your Cart
                    </button>
                </li>
            </ul>
        </div>
    );
};