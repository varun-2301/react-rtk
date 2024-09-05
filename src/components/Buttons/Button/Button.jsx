import PropTypes from 'prop-types'

export const Button = (props) => {
    return <button {...props}>{props.text}</button>
}

Button.propTypes = {
    text: PropTypes.string,
}
