import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '../../Buttons'

/**
 * @name ErrorFallback
 * @description Customer Centre fallback render for when an error boundary is tripped
 * @param {*} { error: { message }, componentStack, resetErrorBoundary }
 */
export const ErrorFallback = ({ error, componentStack, resetErrorBoundary }) => {
    const toolbarButtons = [
        {
            label: 'Try Again',
            onClick: resetErrorBoundary,
            variant: 'outlined',
            color: 'error',
        },
        {
            label: 'Reload',
            onClick: () => window.location.reload(),
            variant: 'outlined',
            color: 'error',
        },
    ]

    return (
        <div className="w-100 m-md-5">
            <div className="alert alert-danger" role="alert">
                <h3>
                    Something went wrong{' '}
                    <span role="img" alt="sad face emoji" aria-label="sad face emoji">
                        😔
                    </span>
                </h3>
                <p>This error has been automatically reported to our developers for investigation.</p>
                <p>You can try again, reload your browser, or report a bug with additional details.</p>
                {toolbarButtons.map((button, i) => (
                    <Button className="btn btn-danger m-1" key={i} {...button} text={button.label} />
                ))}
                <small>
                    <details>
                        <summary>Technical Details</summary>
                        <pre>{error.message}</pre>
                        <pre>{componentStack}</pre>
                    </details>
                </small>
            </div>
        </div>
    )
}

ErrorFallback.propTypes = {
    componentStack: PropTypes.any,
    error: PropTypes.shape({
        message: PropTypes.string,
        stack: PropTypes.string,
    }),
    resetErrorBoundary: PropTypes.func,
}
