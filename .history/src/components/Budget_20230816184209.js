import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget, dispatch,remaining, expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const newBudget = parseInt(event.target.value); // Parse the input string to an integer
        if(newBudget > 20000){
            alert("The value cannot exceed remaining funds  £"+remaining);
        }else if(newBudget<totalExpenses){
            alert("You cannot reduce the budget value lower than the spending");
        }else{
            dispatch({ type: 'SET_BUDGET', payload: newBudget });
        }
    };

    return (
        <div className="alert alert-secondary">
            <span>
                Budget: `${currency}`
                <input
                    required="required"
                    type="number"
                    value={budget}
                    onChange={(event) => handleBudgetChange(event)}
                    step="10"
                />
        
            </span>
        </div>
    );
};

export default Budget;
