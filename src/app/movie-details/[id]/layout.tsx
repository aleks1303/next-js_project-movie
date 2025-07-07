import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Details Movie Page"
};
type Props = { children: React.ReactNode }
const DetailsById = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};
export default DetailsById;