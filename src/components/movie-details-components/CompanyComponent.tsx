import React from 'react';
import {IProduction_companies} from "@/models/IProduction_companies";

type PropsCompany = {
    item: IProduction_companies
}

const CompanyComponent = ({item}: PropsCompany) => {
    return (
        <span className={'mr-2'}>
            {item.name}
        </span>
    );
};

export default CompanyComponent;