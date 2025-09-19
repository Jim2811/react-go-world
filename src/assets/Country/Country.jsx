import React from "react";
import './Country.css'
const Country = ({ country }) => {
  const handleVisited = () =>{
    console.log('Clicked');
  }
  return (
    <div className="countryBox">
      <div>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <h3>Name: {country.name.common}</h3>
        <p>Population: {country.population.population}</p>
        <p>Capital: {country.capital.capital}</p>
        <p>
          Area: {country.area.area}{" "}
          {country.area.area > 200000 ? "Big Country" : "Small Country"}
        </p>
      </div>
      <div>
        <button onClick={handleVisited}>Not Visited</button>
      </div>
    </div>
  );
};

export default Country;
