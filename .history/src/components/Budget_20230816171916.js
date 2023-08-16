import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";

const Budget = () => {
    const {budget} = useContext(AppContext);
    const [budget, setBudget] = useState('');
    return (
        <div className="alert alert-secondary">
            <span>Budget:
            $<input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                     onChange={}
                       >
                        </input>
               </span>
        </div>
    )
}
export default Budget;