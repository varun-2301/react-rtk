import PropTypes from 'prop-types'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from './components/ErrorFallback'

/**
 * @name ErrorBoundary
 * @description MAF preconfigured react-error-boundary
 * @package https://github.com/bvaughn/react-error-boundary#readme
 * @param {*} { fallbackComponent = () => {}, children, onReset = () => {} }
 */
export const ErrorBoundary = ({
    fallbackComponent = ErrorFallback,
    children = null,
    onReset = () => console.info('Error Boundary Reset'),
}) => (
    <ReactErrorBoundary
        FallbackComponent={fallbackComponent}
        onReset={() => {
            // reset the state of your app so the error doesn't happen again
            onReset()
        }}
    >
        {children}
    </ReactErrorBoundary>
)

ErrorBoundary.propTypes = {
    children: PropTypes.node,
    fallbackComponent: PropTypes.node,
    onReset: PropTypes.func,
}
