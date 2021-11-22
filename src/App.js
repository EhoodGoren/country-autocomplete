import React, {useState, useEffect, useRef} from "react";
import Country from "./Country";
import { data } from './data';

export default function App() {
    const [country, setCountry] = useState('');
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputValue(country)
    },[country]);
    return (
        <div>
            <input onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder='Search a country...' />
            <button>X</button>
            <button>V</button>
            {data.map(country => (
                <Country onClick={() => setCountry(country.name)} name={country.name} code={country.code}/>
            ))}
        </div>
    )
}