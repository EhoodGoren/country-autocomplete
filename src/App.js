import React, {useState, useEffect, useRef} from "react";
import Country from "./Country";
import { data } from './data';
import useUpdateLogger from './hooks/useUpdateLogger';
import './App.css';

export default function App() {
    const [inputValue, setInputValue] = useState('');
    const [countryList, setCountryList] = useState([]);
    useUpdateLogger(inputValue);

    useEffect(() => {
        const matchingCountriesList = data.filter(country => {
            return country.name.toLowerCase().includes(inputValue.toLowerCase());
        })
        setCountryList(matchingCountriesList);
    },[inputValue])

    useEffect(() => {
        setCountryList(data);
    },[])

    const countriesDiv = useRef(null);
    const onListBtnClick = (e) => {
        e.target.innerText = e.target.innerText === '🠻' ? '🠹' : '🠻';
        const listDisplayed = countriesDiv.current.style.visibility;
        countriesDiv.current.style.visibility = listDisplayed === 'hidden' ?
            'visible':
            'hidden' ;
    }
    
    return (
        <div id='search-bar'>
            <input id='country-input' onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder='Search a country...' />
            <button id='clear-btn' className='input-btn' onClick={() => setInputValue('')}>❌</button>
            <button id='display-btn' className='input-btn' onClick={onListBtnClick}>🠻</button>
            <div ref={countriesDiv} id='country-list' style={{visibility: "visible"}}>
                {countryList.map(country => (
                    <Country onClick={() => setInputValue(country.name)} name={country.name} code={country.code}/>
                ))}
            </div>
        </div>
    )
}