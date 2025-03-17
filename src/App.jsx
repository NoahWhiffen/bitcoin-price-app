// This page will handle fetching Bitcoin prices, automatic updates, and the refresh button

import React, { useState, useEffect } from 'react';
import PriceDetails from './PriceDetails';

const App = () => {
    const [prices, setPrices] = useState({cad: null});
    const [loading, setLoading] = useState(true);

    // Function to fetch Bitcoin prices
    const fetchPrices = () => {

    };

    // Fetch prices when the component mounts and every 30 seconds thereafter
    useEffect(() => {

    }, []);

    return (
        <div className="app-container">
          <h1>Bitcoin Price Tracker</h1>
          <PriceDetails prices={prices} loading={loading} />
          <button className="refresh-button" onClick={fetchPrice}>
            Refresh Price
          </button>
        </div>
    );
};

export default App;