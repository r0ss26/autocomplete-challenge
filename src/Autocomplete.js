import React, { useState, useEffect } from 'react'

const Autocomplete = ({possibleSearchResults}) => {

    const [input, setInput] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    const handleInput = async (e) => {
        setInput(e.target.value);
    }
    
    useEffect(() => {

        if (input === "") {
            setFilteredSuggestions([])
        } else {
            setFilteredSuggestions(possibleSearchResults.filter(
                suggestion => {
                    return suggestion.toLowerCase().includes(input)
                }
            ))
        }
    }, [input])

    return (
        <div>
            <input list="suggestions" value={input} onChange={e => handleInput(e)} type="text"></input>
            <datalist id="suggestions">
                {filteredSuggestions.slice(0, 5).map(suggestion => <option value={suggestion} />)}
            </datalist>
        </div>
    )
}

export default Autocomplete