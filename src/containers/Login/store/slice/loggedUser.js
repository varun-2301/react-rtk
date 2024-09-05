import { createSlice } from '@reduxjs/toolkit'
import { authenticateUser } from '../thunk'
import { history, REJECTED, PENDING, FULFILLED } from '../../../../utils'

const initialState = {
    status: '',
    userData: {},
}

const LoggedUserSlice = createSlice({
    name: 'loggedUser',
    initialState,
    reducers: {
        resetLoggedUserData() {
            return initialState
        }
    },
    extraReducers(builder) {
        builder.addCase(authenticateUser.pending, (state) => {
            state.status = PENDING
        })
        builder.addCase(authenticateUser.fulfilled, (state, action) => {
            state.status = FULFILLED
            const userData = action.payload.data?.user
            if(userData != undefined){
                state.userData = userData
                localStorage.setItem('data', JSON.stringify(userData))
                localStorage.setItem('accessToken', JSON.stringify(action.payload.data?.accessToken))
                
                const passedLocation = action.payload.location
                const { from } = passedLocation?.location?.state || { from: { pathname: '/dashboard' } }
                history.push(from)
            }
        })
        builder.addCase(authenticateUser.rejected, (state) => {
            state.status = REJECTED
        })
    },
})

export const LoggedUserReducer = LoggedUserSlice.reducer
export const { resetLoggedUserData } = LoggedUserSlice.actions
