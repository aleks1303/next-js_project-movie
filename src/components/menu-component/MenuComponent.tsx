import React from 'react';
import Link from "next/link";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li className={'flex justify-start'}>
                    <Link href={'/?page=1'}>Home</Link>
                </li>
            </ul>
        </div>
    );
};

export default MenuComponent;