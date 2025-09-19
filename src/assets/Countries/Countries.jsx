import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({loadAllCountries}) => {
    const loadCountries = use(loadAllCountries)
    const countries = loadCountries.countries
    return (
        <div>
            <h1>
                Loaded All Countries {countries.length}
            </h1>
            <div className='allCountryCard'>
                {
                    countries.map(country => <Country 
                        key = {country.ccn3.ccn3}
                        country= {country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;