import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const { name} = props.country;

    const countryStyle = {
        border: '1px solid blue',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={countryStyle}>
            <h1>name : {name}</h1>
            <Link to={`/country/${name}`}>Show details {name}</Link>
        </div>
    );
};

export default Country;