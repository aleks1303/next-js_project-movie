import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Search Movie"
};
type Props = { children: React.ReactNode }
const SearchLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};
export default SearchLayout;