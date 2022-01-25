import { useState, useEffect } from 'react';
import recipeAPI from '../apis/index';

const useRecipes = (defaultSearchTerm) => {
    const [recipes, setRecipes] = useState([]); 

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async term => {
        const response = await recipeAPI.get('/search', {
            params: {
                q: term
            }
        });

        setRecipes(response.data.items);
    };

    return [recipes, search];
};

export default useRecipes;