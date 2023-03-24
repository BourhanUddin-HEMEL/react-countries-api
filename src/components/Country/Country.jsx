import React from 'react';
import './Country.css';
const Country = (props) => {
    console.log(props.country.name.common)
    return (
        <div className='country'>
            <h4>Country Name : {props.country.name.common}</h4>
            <p>Region : {props.country.region}</p>
            <p>Area : {props.country.area}</p>
            <p>Population :{props.country.population}</p>
        </div>
    );
};

export default Country;