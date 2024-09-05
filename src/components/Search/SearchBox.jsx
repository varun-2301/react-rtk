import { useState } from 'react'
import PropTypes from 'prop-types'

export const SearchBox = ({ searchValue, searchInputChangeValue, searchParentClass, searchText }) => {
    const [searchVal, setSearchVal] = useState(searchValue)

    const _handleChange = (event) => setSearchVal(event.target.value)

    const _handleInputChange = () => searchInputChangeValue(searchVal)

    return (
        <div className={searchParentClass || 'search-div'}>
            <input
                type="text"
                className="form-control search-user"
                onKeyPress={(event) => {
                    var key = event.keyCode || event.which
                    if (key === 13) _handleInputChange(event)
                }}
                value={searchVal}
                onChange={_handleChange}
                placeholder={searchText ? searchText : ''}
            />
        </div>
    )
}

SearchBox.propTypes = {
    searchValue: PropTypes.string,
    searchParentClass: PropTypes.string,
    searchInputChangeValue: PropTypes.func,
    searchText: PropTypes.string,
}
