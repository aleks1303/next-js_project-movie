import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "DetailsById metadata"
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