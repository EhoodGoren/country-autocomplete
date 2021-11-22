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
        console.log(matchingCountriesList);
        setCountryList(matchingCountriesList);
    },[inputValue])

    useEffect(() => {
        setCountryList(data);
    },[])

    return (
        <div>
            <input onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder='Search a country...' />
            <button>X</button>
            <button>V</button>
            {countryList.map(country => (
                <Country onClick={() => setInputValue(country.name)} name={country.name} code={country.code}/>
            ))}
        </div>
    )
}