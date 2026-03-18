import React, { use } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  //   console.log(countries);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
