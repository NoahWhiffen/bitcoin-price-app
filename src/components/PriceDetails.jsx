// This page will display the Bitcoin prices in USD, EUR, GBP and CAD.

import React from 'react';
import Header from './Header';

const PriceDetails = ({prices, loading}) => {
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='app-container'>
            <Header />
            <div className="price-details">
                <h2>Bitcoin Price:</h2>
                <ul>
                    <li>USD: ${prices.usd}</li>
                    <li>EUR: €{prices.eur}</li>
                    <li>GBP: £{prices.gbp}</li>
                    <li>CAD: C${prices.cad}</li>
                </ul>
            </div>
        </div>
    );
};

export default PriceDetails;