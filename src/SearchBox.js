import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa3 mb4'>
                <input
                    className = 'pa3 br4 ba b--blue bg-white-90 dark-blue w-50-ns w-80
                          hover-bg-white transition-colors input-reset
                          shadow-4 tracked placeholder-dark-blue'
                    type='search'
                    placeholder='search robots'
                    onChange = {searchChange}
                />
        </div>
    );
}


export default SearchBox;
