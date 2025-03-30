import React, { useEffect, useState } from 'react';
import PriceDetails from './PriceDetails';
import '../styles/App.css';

const App = () => {
  const [prices, setPrices] = useState({
    usd: null,
    eur: null,
    gbp: null,
    cad: null
  });
  const [loading, setLoading] = useState(true);

  // Fetch the Bitcoin price
  const fetchPrice = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur,gbp,cad'
      );
      const data = await response.json();
      setPrices({
        usd: Math.round(data.bitcoin.usd * 100),
        eur: Math.round(data.bitcoin.eur * 100),
        gbp: Math.round(data.bitcoin.gbp * 100),
        cad: Math.round(data.bitcoin.cad * 100)
      });
    } catch (error) {
      console.error("Error fetching the Bitcoin price", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPrice();
    const interval = setInterval(fetchPrice, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Bitcoin Price Tracker</h1>
      <PriceDetails prices={prices} loading={loading} fetchPrice={fetchPrice} />
    </div>
  );
};

export default App;
