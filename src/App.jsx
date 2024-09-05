import { Suspense } from 'react'

import MainRoute from './routes/MainRoute'
import { ErrorBoundary, Loader } from './components'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'font-awesome/css/font-awesome.min.css'
import AppStyle from './AppStyle'

function App() {

    return (
            <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                    <MainRoute />
                    <AppStyle />
                </Suspense>
            </ErrorBoundary>
    )
}

export default App
