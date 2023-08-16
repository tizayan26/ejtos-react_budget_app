import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value; 
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    }

    return(
        <select className='alert alert-success' onChange={handleCurrencyChange}>
            <option value="$">$ Dollar</option>
            <option value="£" selected>£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>
    )
}

export default Currency;