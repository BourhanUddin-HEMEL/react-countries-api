import React from 'react';
import './Country.css';
const Country = (props) => {
    // console.log(props.country);
    const {population,area,region,name,flags} = props.country;//destructuring
    return (
        <div className='country'>
            <p><img src={flags.png}  alt="" /></p>
            <h2> {name.common}</h2>
            <p>Region : {region}</p>
            <p>Area : {area}</p>
            <p>Population :{population}</p>
        </div>
    );
};

export default Country;