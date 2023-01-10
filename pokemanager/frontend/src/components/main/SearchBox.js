import React from 'react';

export const SearchBox = ({placeholder, handleChange}) =>(
    <input 
        placeholder={placeholder} 
        onChange={handleChange}
    />
);