'use client'

import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {FormValidator} from "@/validator/validator";
import {useRouter} from "next/navigation";


type Props = {
    query: string
}
interface IForm {
    query: string
}


const FormComponent = ({query}: Props) => {
    const router = useRouter();
    const {handleSubmit, register, formState: {errors}} = useForm<IForm>({
        mode: 'all',
        resolver: joiResolver(FormValidator)
    });

    const handlerForm = ({query}: IForm) => {
        router.push(`/search?query=${encodeURIComponent(query.trim())}`);
    };
    return (
        <div className={'pt-3'}>
            <form onSubmit={handleSubmit(handlerForm)} className="flex items-center gap-2 mb-3">
                <label>
                    <input
                    type="text"{...register('query')}
                    name="query"
                    defaultValue={query}
                    placeholder="Search..."
                    className="border bg-white rounded p-2 w-64"
                />
                </label>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Шукати
                </button>
            </form>
            {errors.query && <div className={'text-sm text-red-400 m-1'}>{errors.query.message}</div>}
        </div>
    );
};

export default FormComponent;