import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        const newBudget = parseInt(event.target.value); // Parse the input string to an integer
        dispatch({ type: 'SET_BUDGET', payload: newBudget });
    };

    const increaseBudget = () => {
        const newBudget = budget + 10;
        dispatch({ type: 'SET_BUDGET', payload: newBudget });
    };

    const decreaseBudget = () => {
        if (budget >= 10) {
            const newBudget = budget - 10;
            dispatch({ type: 'SET_BUDGET', payload: newBudget });
        }
    };

    return (
        <div className="alert alert-secondary">
            <span>
                Budget:
                <button onClick={decreaseBudget}>-</button>
                <input
                    required="required"
                    type="number"
                    value={budget}
                    onChange={(event) => handleBudgetChange(event)}
                    step="10"
                />
                <button onClick={increaseBudget}>+</button>
            </span>
        </div>
    );
};

export default Budget;
