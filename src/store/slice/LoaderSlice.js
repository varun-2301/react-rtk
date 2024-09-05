// loaderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        isLoading: false,
        message: '', // Optional: For displaying custom messages
    },
    reducers: {
        showLoader: (state, action) => {
            state.isLoading = true;
            state.message = action.payload || '';
        },
        hideLoader: (state) => {
            state.isLoading = false;
            state.message = '';
        },
    },
})

export const { showLoader, hideLoader } = loaderSlice.actions
export const loaderReducer = loaderSlice.reducer
