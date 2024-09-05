import React from 'react'
import { useSelector } from 'react-redux'

export const Dashboard = () => {
    /**fetched data from redux store */
    const loggedUser = useSelector((state) => state.authenticatedUser.userData)

    return (
        <div className="col main pt-5 mt-3">
            <h1 className="display-4 d-none d-sm-block">Welcome, {loggedUser.full_name || ''}</h1>
        </div>
    )
}