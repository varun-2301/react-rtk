import { createAsyncThunk } from "@reduxjs/toolkit"
import { hideLoader, showLoader } from "../../../../store"
import api from "../../../../axios"
import { displaySuccessMessage } from "../../../../utils"

/**method called to fetch all users */
export const fetchUserList = createAsyncThunk(
    "user/fetch",
    async (params, {dispatch}) => {
        dispatch(showLoader())
        try{
            const response = await api.get("user", {params})
            if(response.success)
                return response.data

        } finally {
            dispatch(hideLoader())
        }
    }
)

/**method called to delete user */
export const deleteUser = createAsyncThunk(
    'user/delete',
    async(id , {dispatch, getState}) => {
        dispatch(showLoader())
        try {
            const response = await api.delete(`user/${id}`)
            if (response.success) {
                const updatedUsersList = getState().user.userList.filter((user) => user.id !== id)
                displaySuccessMessage('Record Deleted Successfully')
                return updatedUsersList
            }
        } finally {
            dispatch(hideLoader())
        }
    }
)

/**method called to fetch data of single user */
export const fetchEditUserFormData = createAsyncThunk(
    "user/edit",
    async (id, {dispatch}) => {
        dispatch(showLoader())
        try {
            const response = await api.get(`user/${id}`)
            if(response.success)
                return response.data

        } finally {
            dispatch(hideLoader())
        }
    }
)

/**method called to submit user form */
export const submitUserFormData = createAsyncThunk(
    "user/submitForm",
    async (arg, {dispatch}) => {
        dispatch(showLoader())
        try {
            const { id, postData } = arg
            let response = ''
            if(id)
                response = await api.put(`user/${id}`, postData)
            else
                response = await api.post(`user`, postData)

            return response.data.data
        } finally {
            dispatch(hideLoader())
        }
    }
)
