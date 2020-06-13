import React from 'react';

const SearchBox = ({searchChange}) => {

    return(
        <input 
            className = "pa3 ma2 bg-sky-blue b--dark-blue br3" 
            type="search" 
            placeholder="search robots"
            onChange = {searchChange} 
        />

    );
}

export default SearchBox;