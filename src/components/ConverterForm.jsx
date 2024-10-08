import React, { useState } from 'react'; // Import useState
import CurrencySelect from './CurrencySelect';

const ConverterForm = () => {
    // State management
    const [amount, setAmount] = useState(100);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [result,setResult]=useState("")

    const handleSwapCurrencies=()=>{
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency)
    }

    // Handle amount change
    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    // Handle currency change
    const handleFromCurrencyChange = (e) => {
        setFromCurrency(e.target.value);
    };

    const handleToCurrencyChange = (e) => {
        setToCurrency(e.target.value);
    };

      
  const getExchangeRate= async ()=>{
    console.log("All Env Variables:", import.meta.env);

    const API_KEY = import.meta.env.VITE_API_KEY;

        console.log("API Key:", API_KEY);

                const API_URL=`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

                try {
                    const response=await fetch(API_URL);
                    if(!response.ok) throw Error("somthing went wrong ");
                    const data=await response.json();
                    const rate=(data.conversion_rate * amount).toFixed(2);
                    setResult(`${amount} ${fromCurrency}=${rate} ${toCurrency}`)
                    console.log(rate);
                    console.log(data);
                } catch (error) {
                    console.log("URL not found",error)
                }
    }
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
       getExchangeRate();
    };

    return (
        <form onSubmit={handleSubmit} className='converter-form'>
            <div className="form-group">
                <label className="form-label">Enter Amount</label>
                <input
                    type="number"
                    className='form-input'
                    value={amount}
                    onChange={handleAmountChange}
                    required
                />
            </div>

            <div className="from-group form-currency-group">
                {/* From Currency Section */}
                <div className="from-section">
                    <label className="from-label">From </label>
                    <CurrencySelect 
                        selectedCurrency={fromCurrency} 
                        onChange={handleFromCurrencyChange} // Pass the handler
                        handelCurrency={e=>setFromCurrency(e.target.value)}
                    />
                </div>

                {/* Swap Icon */}
                <div className="swap-icon" onClick={handleSwapCurrencies}>
                    <svg width="16" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path 
                                fillRule="evenodd" 
                                clipRule="evenodd" 
                                d="M16 3.93a.75.75 0 0 1 1.177-.617l4.432 3.069a.75.75 0 0 1 0 1.233l-4.432 3.069A.75.75 0 0 1 16 10.067V8H4a1 1 0 0 1 0-2h12V3.93zm-9.177 9.383A.75.75 0 0 1 8 13.93V16h12a1 1 0 1 1 0 2H8v2.067a.75.75 0 0 1-1.177.617l-4.432-3.069a.75.75 0 0 1 0-1.233l4.432-3.069z" 
                                fill="#fff"
                            ></path>
                        </g>
                    </svg>
                </div>

                {/* To Currency Section */}
                <div className="from-section">
                    <label className="from-label">To </label>
                    <CurrencySelect 
                        selectedCurrency={toCurrency} 
                        onChange={handleToCurrencyChange} // Pass the handler
                        handelCurrency={e=>setToCurrency(e.target.value)}
                    />
                </div>
            </div>

            <button type="submit" className='submit-button'>Get Exchange Rate</button>
            <p className='exchange-rate-result'>{result}</p>
        </form>
    );
};

export default ConverterForm;
