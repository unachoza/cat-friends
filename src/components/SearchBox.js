import React from 'react'

const SearchBox = ({query, onQuery}) => {


    return (
        <div className="pa">
            <input
                className="pa3 ba b--green bg-lightest-blue input"
                type="search"
                placeholder="search cats"
                onChange={onQuery}
            />
        </div>
    )
}
export default SearchBox