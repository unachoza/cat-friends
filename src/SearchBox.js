import React from 'react'

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="pa">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search cats"
                onChange={() => searchChange}
            />
        </div>
    )
}
export default SearchBox