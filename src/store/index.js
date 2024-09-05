// store.js
import { configureStore } from '@reduxjs/toolkit'

import { loaderReducer } from './slice'
import { loggedUserSlice } from '../containers/Login/store'
import { userSlice } from '../containers/User'

export const store = configureStore({
    reducer: {
        authenticatedUser   : loggedUserSlice,
        loader              : loaderReducer,
        user                : userSlice
    }
})

export { showLoader, hideLoader } from './slice'