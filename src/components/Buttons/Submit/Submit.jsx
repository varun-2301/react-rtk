import PropTypes from 'prop-types'

export const Submit = (props) => (
    <button type="submit" {...props}>
        {props.text}
    </button>
)

Submit.propTypes = {
    text: PropTypes.string,
}
