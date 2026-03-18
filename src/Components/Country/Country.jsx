import React, { useState } from "react";
import "./country.css";
const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    //    Basic system
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    // 2nd system
    // setVisited(visited ? false : true);

    // 3rd system
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  //   console.log(country.area.area);
  return (
    <div className={`country ${visited && "bg-lime-500 text-blue-600"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name: {country.name.common}</h2>
      <p>Population: {country.population.population}</p>
      <p>Capital: {country.capital.capital} </p>
      <p>Official Name: {country.name.official} </p>
      <h3 className="text-[#7d5ef7]">
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big country" : "Small country"}
      </h3>
      <button onClick={handleVisited} className="btn btn-primary mt-5">
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
