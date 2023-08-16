import React, {useContext, useState} from "react";
import {AppContext} from "../context/AppContext";

const Budget = () => {
    const {budget} = useContext(AppContext);
    const setBudget= (value) => {
        budget = budget + value;
        document.getElementById('budget').value = budget;
    }
    return (
        <div className="alert alert-secondary">
            <span>Budget:
            $<input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                     onChange={(event) => setBudget(event.target.value)}
                       >
                        </input>
               </span>
        </div>
    )
}
export default Budget;