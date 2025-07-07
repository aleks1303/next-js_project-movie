import {IProduction_countries} from "@/models/IProduction_countries";


type PropsProductCountryType = {
    country: IProduction_countries
}
const CountryProductComponent = ({country}:PropsProductCountryType) => {
    return (
        <span className={'mr-2'}>
          {country.name};
        </span>
    );
};

export default CountryProductComponent;