import React, { use } from 'react';
import Country from './Country';
const Countries = ({loadAllCountries}) => {
    const loadCountries = use(loadAllCountries)
    const countries = loadCountries.countries
    return (
        <div>
            Loaded All Countries {countries.length}
        </div>
    );
};

export default Countries;