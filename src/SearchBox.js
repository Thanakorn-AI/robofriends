import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa3 mb4'>
                <input
                    className = 'pa3 br4 ba b--blue bg-white-90 dark-blue w-50-ns w-80
                          hover-bg-white transition-colors input-reset
                          shadow-4 tracked placeholder-dark-blue fw7'
                    type='search'
                    placeholder='search robots'
                    onChange = {searchChange}
                    style={{ fontWeight: 'bold' }}
                />
        </div>
    );
}


export default SearchBox;
