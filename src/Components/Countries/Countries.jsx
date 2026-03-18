import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const countriesData = use(countriesPromise);

  const handleVisitedCountries = (country) => {
    // console.log(country);
    // console.log("visited countries clicked");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  //   console.log(countries);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
      <h3 className="text-xl font-bold">
        Total Visited Countries: {visitedCountries.length}
      </h3>
      <ol className="text-red-500">
        {visitedCountries.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
