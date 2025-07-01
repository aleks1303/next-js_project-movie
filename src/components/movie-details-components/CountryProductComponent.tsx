import type {FC} from "react";
import {IProduction_countries} from "@/models/IProduction_countries";


type PropsProductCountryType = {
    country: IProduction_countries
}
const CountryProductComponent: FC<PropsProductCountryType> = ({country}) => {
    return (
        <span className={'mr-2'}>
          {country.name};
        </span>
    );
};

export default CountryProductComponent;