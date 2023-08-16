import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, setBudget } = useContext(AppContext);

  const handleBudgetChange = (event) => {
    const newBudget = event.target.value;
    setBudget(newBudget);
  };

  return (
    <div className="alert alert-secondary">
      <span>
        Budget: $
        <input
          required="required"
          type="number"
          id="budget"
          value={budget}
          onChange={handleBudgetChange}
          step="10"
        />
      </span>
    </div>
  );
};

export default Budget;
