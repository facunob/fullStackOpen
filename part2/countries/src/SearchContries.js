import React, {useState} from 'react';


const SearchContries = ({ onSearch }) => {
    const [value, setValue] = useState('');
    
    return (
        <>
            Search: <input type="text" value={value} onChange={e => setValue(e.target.value)} /> <button onClick={() => onSearch(value)}>ENTER</button>
        </>
    );
}

export default SearchContries;