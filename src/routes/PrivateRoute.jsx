import React from 'react'
import { Navigate, useLocation, Outlet } from 'react-router-dom'
import _ from 'lodash'

import { getLoggedInUserData } from '../utils'
import MainLayout from '../pages/MainLayout'

const PrivateRoute = () => {
    const user = getLoggedInUserData()
    const location = useLocation()

    return !_.isEmpty(user) ? (
        <MainLayout>
            <Outlet />
        </MainLayout>
    ) : (
        <Navigate to="/" state={{ from: location }} replace />
    )
}

export default PrivateRoute
