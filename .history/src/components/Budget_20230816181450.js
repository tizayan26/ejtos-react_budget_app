import React, {useContext} from "react";
import {AppContext, AppProvider} from "../context/AppContext";

const Budget = () => {
    const { budget, setBudget } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        const newBudget = parseInt(event.target.value); // Parse the input string to an integer
        setBudget(newBudget);
      };
    return (
        <div className="alert alert-secondary">
            <span>Budget:
            $<input
                        required='required'
                        type='number'
                        value={budget}
                        onChange={(event) => handleBudgetChange(event.target.value)}
                        step='10'
                       >
                        </input>
               </span>
        </div>
    )
}
export default Budget;