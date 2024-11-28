import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();

  if (!state || !state.data) {
    return <p>No country selected.</p>;
  }

  const country = state.data;

  return (
    <div className="innerContainer">
      <h2>{country.name.common}</h2>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="200" />
      <div className={country.detailContainer}>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Population:</strong> {country.population}</p>
        <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
      </div>
    </div>
  );
};

export default Details;
