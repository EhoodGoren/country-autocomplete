import React, {useState, useEffect, useRef} from "react";
import Country from "./Country";
import { data } from './data';

export default function App() {
    const [country, setCountry] = useState('');
    return (
        <div>
            <input placeholder='Search a country...'></input>
            <button>X</button>
            <button>V</button>
            {data.map(country => (
                <Country name={country.name} code={country.code}/>
            ))}
        </div>
    )
}