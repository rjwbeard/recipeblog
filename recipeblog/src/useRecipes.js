import React, { useState, useEffect } from 'react';
import { recipes as recipeArray } from './recipeArray';

const useRecipes = (defaultSearchTerm) => {
    const [recipes, setRecipes] = useState([...recipeArray]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = term => {
        console.log(term);
        // const response = recipes.get('/search', {
        //     params: {
        //         q: term
        //     }
        // });

        // setRecipes(response.data.items);
    };

    return [recipes, search];
};

export default useRecipes;