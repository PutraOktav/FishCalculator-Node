// src/components/FishCalculator.js
import React, { useState } from "react";
import axios from "axios";

const FishCalculator = () => {
const [fishCount, setFishCount] = useState(0);
const [fishWeight, setFishWeight] = useState(0);
const [totalWeight, setTotalWeight] = useState(null);

const handleCalculate = async () => {
try {
const response = await axios.post("http://localhost:5000/calculate", {
fishCount,
fishWeight,
});
setTotalWeight(response.data.totalWeight);
} catch (error) {
console.error("Error calculating total weight:", error);
}
};

return (
<div className="calculator-container">
    <h1 className="title">Perhitungan Perikanan</h1>
    <div className="input-group">
        <label>Jumlah Ikan:</label>
        <input type="number" value={fishCount} onChange={e=> setFishCount(e.target.value)}
        />
    </div>
    <div className="input-group">
        <label>Berat Ikan per ekor (kg):</label>
        <input type="number" value={fishWeight} onChange={e=> setFishWeight(e.target.value)}
        />
    </div>
    <button onClick={handleCalculate}>Hitung</button>
    {totalWeight !== null && (
    <h2 className="result">Total Berat: {totalWeight} kg</h2>
    )}
</div>
);
};

export default FishCalculator;
