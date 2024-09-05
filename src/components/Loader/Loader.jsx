import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import BlockStyle from './style'

export const Loader = ({ title }) => {
    const blocking = useSelector((state) => state.loader.isLoading)

    return blocking ? (
        <BlockStyle>
            <div className="block-ui-container">
                <div className="block-ui-overlay" />
                <div className="block-ui-message-container">
                    <div className="block-ui-message">
                        <h4>{title}</h4>
                        <div className="loading-indicator">
                            <svg id="indicator" viewBox="0 0 100 100">
                                <circle id="circle" cx="50" cy="50" r="45" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </BlockStyle>
    ) : (
        ''
    )
}

Loader.defaultProps = {
    title: 'Loading, Please wait',
}

Loader.propTypes = {
    title: PropTypes.string,
}
