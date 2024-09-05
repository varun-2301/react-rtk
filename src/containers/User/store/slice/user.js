import { createSlice } from "@reduxjs/toolkit"

import { fetchUserList, deleteUser, fetchEditUserFormData, submitUserFormData } from '../thunk'
import { history } from "../../../../utils"

const initialState = {
    status          : '',
    userList        : [],
    totalRecords    : 0,
    per_page        : 0,
    currentPage     : 1,
    user            : {}
}

const userSliceReducers = createSlice({
    name : 'user',
    initialState,
    reducers: {
        resetUser(){
            return initialState
        }
    },
    extraReducers(builder) {
        /**reducers when fetching users */
        builder.addCase(fetchUserList.pending, (state) => {
            state.status = "pending"
        }),
        builder.addCase(fetchUserList.fulfilled, (state, action) =>{
            state.status = "fulfilled"
            if(action.payload){
                state.userList = action.payload.user
                state.totalRecords = action.payload.total,
                state.per_page = action.payload.per_page,
                state.currentPage = action.payload.current_page
            }
        }),
        builder.addCase(fetchUserList.rejected, (state) => {
            state.status = "rejected"
        })
        /** end of reducers when fetching users */

        /**reducers when deleting user */
        builder.addCase(deleteUser.pending, (state) => {
            state.status = "pending"
        }),
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.status = "fulfilled"
            state.userList = action.payload
            state.totalRecords = action.payload.length
        }),
        builder.addCase(deleteUser.rejected, (state) => {
            state.status = "rejected"
        })
        /**end of reducers when deleting user */

        /**reducers when fetching data of a user */
        builder.addCase(fetchEditUserFormData.pending, (state) => {
            state.status = "pending"
        }),
        builder.addCase(fetchEditUserFormData.fulfilled, (state, action) => {
            state.status = "fulfilled"
            state.user = action.payload.user
        }),
        builder.addCase(fetchEditUserFormData.rejected, (state) => {
            state.status = "rejected"
        })
        /**end of reducers when fetching data of a user */

        /**reducers when submitting user form */
        builder.addCase(submitUserFormData.pending, (state) => {
            state.status = "pending"
        }),
        builder.addCase(submitUserFormData.fulfilled, (state, action) => {
            state.status = "fulfilled"
            history.push('/user')
        }),
        builder.addCase(submitUserFormData.rejected, (state) => {
            state.status = "rejected"
        })
        /**end of reducers when submitting user form */
    }
})

export const userSlice = userSliceReducers.reducer
export const { resetUser } = userSliceReducers.actions