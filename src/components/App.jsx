// This page will handle fetching Bitcoin prices, automatic updates, and the refresh button

import React, { useState, useEffect } from 'react';
import Header from './Header';
import PriceDetails from './PriceDetails';

const App = () => {
    const [prices, setPrices] = useState({cad: null, usd: null, eur: null, gbp: null});
    const [loading, setLoading] = useState(true);

    // Function to fetch Bitcoin prices
    const fetchPrices = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=cad');
        const data = await response.json();
        setPrices({
          cad: data.bitcoin.cad,
          usd: data.bitcoin.usd,
          eur: data.bitcoin.eur,
          gbp: data.bitcoin.gbp
        });
      } catch (error) {
        console.error('Error fetching Bitcoin prices: ', error);
      }
      setLoading(false);
    };

    // Fetch prices when the component mounts and every 30 seconds thereafter
    useEffect(() => {
      fetchPrices();
      const interval = setInterval(fetchPrices, 30000);

      return () => clearInterval(interval);
    }, []);

    return (
        <div className="app-container">
          <Header/>
          <h1>Bitcoin Price Tracker</h1>
          <PriceDetails prices={prices} loading={loading} />
          <button className="refresh-button" onClick={fetchPrice}>
            Refresh Price
          </button>
        </div>
    );
};

export default App;