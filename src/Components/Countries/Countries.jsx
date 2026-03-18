import React, { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  //   console.log(countries);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
      <div>
        {countries.map((country) => (
          <Country country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
