'use client'

import {useRouter, useSearchParams} from "next/navigation";


const PaginationComponent = () => {
    const searchParams = useSearchParams();
    const router = useRouter()
    const page = Number(searchParams.get('page'))
    const genreParams = searchParams.get('genre') || ''
    const numberPage = Number(page) || 1
    const totalPage = 500

    const setQuery = (newPage: number) => {
        const params = new URLSearchParams()
        params.set('page', newPage.toString())
        if (genreParams) params.set('genre', genreParams)
        router.push(`/?${params.toString()}`)
    }

    const onClickPrev = () => {
        if (numberPage > 1) {
           setQuery(numberPage - 1)
        }
    };

    const onClickNext = () => {
        if (numberPage < totalPage) {
           setQuery(numberPage + 1)
        }
    };
    const buttonClass = 'border-1 w-15 m-2';
    const buttonClassDisabled = 'opacity-30 cursor-not-allowed'
    return (
        <div>
            <button className={`${buttonClass} ${numberPage <= 1 ? buttonClassDisabled : ''}`}
                    disabled={numberPage <= 1} onClick={onClickPrev}>prev
            </button>
            <button className={`${buttonClass} ${numberPage >= totalPage ? buttonClassDisabled : ''}`}
                    disabled={numberPage >= totalPage} onClick={onClickNext}>next
            </button>
        </div>
    );
};

export default PaginationComponent;
