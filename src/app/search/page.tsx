import React from 'react';
import SearchComponent from "@/components/search-component/SearchComponent";
import MenuComponent from "@/components/menu-component/MenuComponent";

type Props = {
    searchParams: Promise<{
        query?: string
    }>
}
const SearchPage = async ({searchParams}:Props) => {
    const params = await searchParams
    const query = typeof params.query === 'string' ? params.query : '';
    return (
        <div>
            <MenuComponent/>
            <SearchComponent query={query}/>

        </div>
    );
};

export default SearchPage;