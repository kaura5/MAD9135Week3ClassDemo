import React from 'react';
const { getCode, getName } = require('country-list');

function List({ item }) {

    let probability = item.probability * 100;
    let probability2 = Math.trunc(probability);
    let countryName = getName(item.country_id);
    return (
        <li>There are {probability2}% chances that you are from {countryName}. </li>
    )
}

export default List;