import React from 'react';


const Filter = ({value, onChange}) => {
    return (
        <>
            Filter: <input type="text" value={value} onChange={e => onChange(e.target.value)} />
        </>
    );
}

export default Filter;