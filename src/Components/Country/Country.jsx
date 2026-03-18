import React from "react";
import "./country.css";
const Country = ({ country }) => {
  console.log(country.area.area);
  return (
    <div className="country">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name: {country.name.common}</h2>
      <p>Population: {country.population.population}</p>
      <p>Capital: {country.capital.capital} </p>
      <p>Official Name: {country.name.official} </p>
      <h3 className="text-[#9980ff]">
        Area:{country.area.area}{" "}
        {country.area.area > 300000 ? "Big country" : "Small country"}
      </h3>
      <button className="btn btn-primary mt-5">Not Visited</button>
    </div>
  );
};

export default Country;
