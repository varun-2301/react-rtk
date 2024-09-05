import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../../axios'
import { showLoader, hideLoader } from '../../../../store/slice'

export const authenticateUser = createAsyncThunk(
    'users/authenticate',
    async (arg, {dispatch}) => {
        const {postData : loginData, location} = arg
        dispatch(showLoader())
        try {
            const response = await api.post(`login`, loginData)
            return { data: response?.data, location } // Return additional data
        } finally {
            dispatch(hideLoader()) // Hide loader after request completes
        }
    }
)
