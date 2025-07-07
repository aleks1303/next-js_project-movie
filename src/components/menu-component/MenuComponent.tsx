import React from 'react';
import Link from "next/link";

const MenuComponent = () => {
    return (
        <div className={'pt-3'}>
            <ul className={'pl-5 mt-2'}>
                <li>
                    <Link href={'/?page=1'}>Home</Link>
                </li>
            </ul>
        </div>
    );
};

export default MenuComponent;