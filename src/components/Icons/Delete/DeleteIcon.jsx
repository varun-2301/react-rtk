import PropTypes from 'prop-types'

export const DeleteIcon = ({ handleClick }) => {
    return (
        <a className="ms-2" title="Delete" style={{ cursor: 'pointer' }} onClick={handleClick}>
            <i className="fa fa-trash" aria-hidden="true"></i>
        </a>
    )
}

DeleteIcon.propTypes = {
    handleClick: PropTypes.func,
}
