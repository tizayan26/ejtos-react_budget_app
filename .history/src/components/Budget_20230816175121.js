import React, {useContext, useState} from "react";
import {AppContext} from "../context/AppContext";

const Budget = () => {
    const { budget, setBudget } = useContext(AppContext);
    let newBudget = 0
    const handleBudgetChange = (event) => {
        newBudget = parseInt(event.target.value); // Parse the input string to an integer
        setBudget(newBudget);
      };
    return (
        <div className="alert alert-secondary">
            <span>Budget:
            $<input
                        required='required'
                        type='number'
                        value={newBudget? newBudget : budget}
                        onChange={(event) => handleBudgetChange(event.target.value)}
                        step='10'
                       >
                        </input>
               </span>
        </div>
    )
}
export default Budget;