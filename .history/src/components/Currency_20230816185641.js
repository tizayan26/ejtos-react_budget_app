import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value; 
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    }

    return(
        <select onChange={handleCurrencyChange}>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>
    )
}

export default currency;