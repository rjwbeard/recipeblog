import React, { useState } from 'react';


const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        onFormSubmit(term);
        setTerm('');
    };

    return (
        <div>
            <div className="search-bar ui segment">
                <form onSubmit={onSubmit} className="ui form">
                    <div className="field">
                        <label>Search all Recipes</label>
                        <input 
                        type="text" 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        </div>
        
    )
};

export default SearchBar;