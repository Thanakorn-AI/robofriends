import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa3 mb4'>
                <input
                    className = 'pa3 br3 ba b--light-red bg-dark-gray white-90 w-50-ns w-80
                          hover-bg-mid-gray transition-colors input-reset outline-0
                          shadow-5 tracked'
                    type='search'
                    placeholder='search robots'
                    onChange = {searchChange}
                />
        </div>
    );
}


export default SearchBox;
