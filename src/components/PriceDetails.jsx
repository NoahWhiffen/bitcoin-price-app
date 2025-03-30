import React from 'react';
import '../styles/PriceDetails.css';

const PriceDetails = ({ prices, loading, fetchPrice }) => {
  return (
    <div className="price-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="price-box">
          <div className="price">
            <h2>USD: ${ (prices.usd / 100).toFixed(2) }</h2>
          </div>
          <div className="price">
            <h2>EUR: €{ (prices.eur / 100).toFixed(2) }</h2>
          </div>
          <div className="price">
            <h2>GBP: £{ (prices.gbp / 100).toFixed(2) }</h2>
          </div>
          <div className="price">
            <h2>CAD: ${ (prices.cad / 100).toFixed(2) }</h2>
          </div>
        </div>
      )}
      <button className="refresh-btn" onClick={fetchPrice}>Refresh Price</button>
    </div>
  );
};

export default PriceDetails;
