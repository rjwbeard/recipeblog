import React from 'react';
import SearchBar from './SearchBar';
import useRecipes from './useRecipes';

const Header = () => {
    const [recipes, search] = useRecipes('');
    
    return (
        <div className="Header">
            <h1 className="ui medium header">Cookie Worldwide</h1>
            <SearchBar onFormSubmit={search} />
        </div>
    );
}

export default Header;