

import React, { useState } from "react";
import { Button } from 'semantic-ui-react'
import Dropdown from 'react-bootstrap/Dropdown';

const ServiceCostCalculator = () => {
  const [provider, setProvider] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [duration, setDuration] = useState("");
  const [finalCost, setFinalCost] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCalculate = () => {
    if (!provider || !quantity || !duration) {
      setErrorMessage("All Fields Are Required.");
      return;
    }

    let costPerMonth = 10; // هزینه دریافت خدمات در هر ماه
    let discount = 0;

    switch (duration) {
      case "1": // یک ماه
        break;
      case "3": // سه ماه
        discount = 0.05;
        break;
      case "6": // شش ماه
        discount = 0.1;
        break;
      case "12": // دوازده ماه
        discount = 0.17;
        break;
      default:
        break;
    }

    let totalCost =
      quantity * costPerMonth * parseInt(duration) * (1 - discount);
    let discountAmount =
      quantity * costPerMonth * parseInt(duration) * discount;
    setFinalCost(totalCost);
    setDiscountAmount(discountAmount);
    setErrorMessage("");
  };

  return (
    <div className="p-5">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <p> Select Broker:</p>
        <p>Enter Leader Strategies:</p>
        <p>Select Subscription Month:</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <label>
          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
          >
            <option value="">Select Broker</option>
            <option value="provider1">Broker 1</option>
            <option value="provider2">Broker 2</option>
            {/* اضافه کردن سایر شرکت‌ها */}
          </select>
        </label>
        <label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <label>
          <select 
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="">Select Months</option>
            <option value="1">1 Month</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="12">12 Months</option>
          </select>
        </label>
        
      </div>
      <br />
      <Button color='orange' onClick={handleCalculate}>Calculate Now</Button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {finalCost !== null && (
        <>
          <p className="h2 text-center">Amount: {finalCost} $</p>
          <p className="h2 text-center"> - Discount: {discountAmount} $</p>
        </>
      )}
    </div>
  );
};

export default ServiceCostCalculator;
