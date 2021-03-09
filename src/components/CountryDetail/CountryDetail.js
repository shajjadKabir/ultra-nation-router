import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
   
    const { countryName } = useParams();
    const [countrySelected, setCountrySelected] = useState([]);
  
    useEffect(() => { 
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountrySelected(data[0]))
    }, [])
    const {nativeName, capital,population, region,languages,currencies,alpha2Code,alpha3Code,regionalBlocs } = countrySelected;
    return (
        <div>
            <h1>Detail component of : {countryName} </h1>
            <h2> Native Name: {nativeName}</h2>
            <h3>capital: {capital}</h3>
            <h3>population: {population}</h3>
            <h3>Region: {region}</h3>
            <h3>Language: {languages && languages[0].name}</h3>
            <h3>Currency: {currencies && currencies[0].name}, Symbol:{" "} {currencies && currencies[0].symbol} </h3>
            <h3>Code: {alpha2Code}, {alpha3Code}</h3>
            <h3> Regional BLOC: {regionalBlocs && regionalBlocs[0].name}, {regionalBlocs && regionalBlocs[0].acronym}</h3>
        </div>
    );
};

export default CountryDetail;