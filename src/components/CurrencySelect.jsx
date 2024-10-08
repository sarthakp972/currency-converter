import React, { useState } from 'react';

const CurrencyCodes = [
    "AED", // United Arab Emirates Dirham
    "AFN", // Afghan Afghani
    "ALL", // Albanian Lek
    "AMD", // Armenian Dram
    "ANG", // Netherlands Antillean Guilder
    "AOA", // Angolan Kwanza
    "ARS", // Argentine Peso
    "AUD", // Australian Dollar
    "AWG", // Aruban Florin
    "AZN", // Azerbaijani Manat
    "BAM", // Bosnia and Herzegovina Convertible Mark
    "BBD", // Barbados Dollar
    "BGN", // Bulgarian Lev
    "BHD", // Bahraini Dinar
    "BIF", // Burundian Franc
    "BMD", // Bermudian Dollar
    "BND", // Brunei Dollar
    "BOB", // Bolivian Boliviano
    "BRL", // Brazilian Real
    "BSD", // Bahamian Dollar
    "BTN", // Bhutanese Ngultrum
    "BWP", // Botswana Pula
    "BYN", // Belarusian Ruble
    "BZD", // Belize Dollar
    "CAD", // Canadian Dollar
    "CDF", // Congolese Franc
    "CHF", // Swiss Franc
    "CLP", // Chilean Peso
    "CNY", // Chinese Yuan Renminbi
    "COP", // Colombian Peso
    "CRC", // Costa Rican Colón
    "CUP", // Cuban Peso
    "CZK", // Czech Koruna
    "DKK", // Danish Krone
    "DOP", // Dominican Peso
    "EGP", // Egyptian Pound
    "ERN", // Eritrean Nakfa
    "ETB", // Ethiopian Birr
    "EUR", // Euro
    "FJD", // Fijian Dollar
    "FKP", // Falkland Islands Pound
    "GBP", // British Pound Sterling
    "GEL", // Georgian Lari
    "GHS", // Ghanaian Cedi
    "GIP", // Gibraltar Pound
    "GMD", // Gambian Dalasi
    "GNF", // Guinean Franc
    "GTQ", // Guatemalan Quetzal
    "GYD", // Guyanese Dollar
    "HKD", // Hong Kong Dollar
    "HNL", // Honduran Lempira
    "HRK", // Croatian Kuna
    "HUF", // Hungarian Forint
    "IDR", // Indonesian Rupiah
    "ILS", // Israeli New Shekel
    "INR", // Indian Rupee
    "IQD", // Iraqi Dinar
    "IRR", // Iranian Rial
    "ISK", // Icelandic Króna
    "JMD", // Jamaican Dollar
    "JPY", // Japanese Yen
    "KES", // Kenyan Shilling
    "KGS", // Kyrgyzstani Som
    "KHR", // Cambodian Riel
    "KPW", // North Korean Won
    "KRW", // South Korean Won
    "KWD", // Kuwaiti Dinar
    "KYD", // Cayman Islands Dollar
    "KZT", // Kazakhstani Tenge
    "LAK", // Laotian Kip
    "LBP", // Lebanese Pound
    "LKR", // Sri Lankan Rupee
    "LRD", // Liberian Dollar
    "LYD", // Libyan Dinar
    "MAD", // Moroccan Dirham
    "MDL", // Moldovan Leu
    "MGA", // Malagasy Ariary
    "MKD", // Macedonian Denar
    "MMK", // Myanmar Kyat
    "MNT", // Mongolian Tögrög
    "MOP", // Macanese Pataca
    "MRU", // Mauritanian Ouguiya
    "MUR", // Mauritian Rupee
    "MVR", // Maldivian Rufiyaa
    "MWK", // Malawian Kwacha
    "MXN", // Mexican Peso
    "MYR", // Malaysian Ringgit
    "MZN", // Mozambican Metical
    "NAD", // Namibian Dollar
    "NGN", // Nigerian Naira
    "NIO", // Nicaraguan Córdoba
    "NOK", // Norwegian Krone
    "NZD", // New Zealand Dollar
    "OMR", // Omani Rial
    "PAB", // Panamanian Balboa
    "PEN", // Peruvian Sol
    "PGK", // Papua New Guinean Kina
    "PHP", // Philippine Peso
    "PKR", // Pakistani Rupee
    "PLN", // Polish Zloty
    "PYG", // Paraguayan Guarani
    "QAR", // Qatari Rial
    "RON", // Romanian Leu
    "RSD", // Serbian Dinar
    "RUB", // Russian Ruble
    "RWF", // Rwandan Franc
    "SAR", // Saudi Riyal
    "SBD", // Solomon Islands Dollar
    "SCR", // Seychellois Rupee
    "SDG", // Sudanese Pound
    "SEK", // Swedish Krona
    "SGD", // Singapore Dollar
    "SHP", // Saint Helena Pound
    "SLL", // Sierra Leonean Leone
    "SOS", // Somali Shilling
    "SRD", // Surinamese Dollar
    "SSP", // South Sudanese Pound
    "STN", // São Tomé and Príncipe Dobra
    "SYP", // Syrian Pound
    "SZL", // Swazi Lilangeni
    "THB", // Thai Baht
    "TJS", // Tajikistani Somoni
    "TMT", // Turkmenistani Manat
    "TND", // Tunisian Dinar
    "TOP", // Tongan Paʻanga
    "TRY", // Turkish Lira
    "TTD", // Trinidad and Tobago Dollar
    "TWD", // New Taiwan Dollar
    "TZS", // Tanzanian Shilling
    "UAH", // Ukrainian Hryvnia
    "UGX", // Ugandan Shilling
    "USD",
    "UYU", // Uruguayan Peso
    "UZS", // Uzbekistani Som
    "VES", // Venezuelan Bolívar
    "VND", // Vietnamese Dong
    "VUV", // Vanuatu Vatu
    "WST", // Samoan Tala
    "XAF", // Central African CFA Franc
    "XAG", // Silver Ounce
    "XAU", // Gold Ounce
    "XCD", // East Caribbean Dollar
    "XOF", // West African CFA Franc
    "XPF", // CFP Franc
    "ZAR", // South African Rand
    "ZMW", // Zambian Kwacha
    "ZWL"  // Zimbabwean Dollar
];

function CurrencySelect({selectedCurrency,  handelCurrency}) {

   const countrycode=selectedCurrency.substring(0,2);
    return (
        <div className="currency-select">
            <img src={`https://flagsapi.com/${countrycode}/flat/64.png`} alt="flag" />
            <select 
            onChange={handelCurrency}
            className='currency-dropdown' value={selectedCurrency}>
                {CurrencyCodes.map(currency => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CurrencySelect;
