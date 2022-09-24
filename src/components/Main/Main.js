import React from 'react';
import List from "../List/List";

function Main({ country }) {
    if (country.length === 0) {
        return <p>Welcome! Please search for any name</p>
    } else {
        return (
            <ul>
                {country.country.map((item) => (
                    <List key={item.country_id} item={item} />
                ))}
            </ul>
        )
    }

}

export default Main;