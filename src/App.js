import React, {useState, useEffect, useRef} from "react";
import Country from "./Country";
import { data } from './data';

export default function App() {
    const [inputValue, setInputValue] = useState('');
    const [countryList, setCountryList] = useState([]);

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
        e.target.innerText = e.target.innerText === 'V' ? '>' : 'V';
        const listDisplayed = countriesDiv.current.style.visibility;
        countriesDiv.current.style.visibility = listDisplayed === 'hidden' ?
            'visible':
            'hidden' ;
    }

    return (
        <div>
            <input onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder='Search a country...' />
            <button onClick={() => setInputValue('')}>X</button>
            <button onClick={onListBtnClick}>&gt;</button>
            <div ref={countriesDiv} id='country-list' style={{visibility: "hidden"}}>
                {countryList.map(country => (
                    <Country onClick={() => setInputValue(country.name)} name={country.name} code={country.code}/>
                ))}
            </div>
        </div>
    )
}