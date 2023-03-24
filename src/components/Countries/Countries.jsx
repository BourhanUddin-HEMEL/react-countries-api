import React, { useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useState(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>{
            console.log(data);//check the api data
            setCountries(data)//load the data

        })
    },[])
    return (
        <div>
            <h1>Hello From Countries : {countries.length}</h1>
            {
                countries.map(country => <Country 
                    country ={country}
                    
                ></Country>)
            }
        </div>
    );
};

export default Countries;