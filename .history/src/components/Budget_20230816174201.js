import React, {useContext, useState} from "react";
import {AppContext} from "../context/AppContext";

const Budget = () => {
    const { budget, setBudget } = useContext(AppContext);
    
    return (
        <div className="alert alert-secondary">
            <span>Budget:
            $<input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                     onChange={(event) => alert(event.target.value)}
                     step='10'
                       >
                        </input>
               </span>
        </div>
    )
}
export default Budget;