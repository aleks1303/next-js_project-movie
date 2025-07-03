'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

const BackComponent = () => {
    const router = useRouter();
    const handler = () => {
        router.back()
    }
    return (
        <div>
            <ul>
                <li className="flex justify-center mt-10">
                    <button
                        onClick={handler}
                        className="border border-gray-500 rounded px-4 py-2"
                    >
                        Назад
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default BackComponent;