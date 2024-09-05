import React, { Fragment, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Loader, CustomRouter } from '../components'
import { history } from '../utils'
import PrivateRoute from './PrivateRoute'
import NotFound from '../pages/NotFound'
const Login = lazy(() => import('../containers/Login').then((module) => ({ default: module.Login })))
const Dashboard = lazy(() => import('../containers/Dashboard').then((module) => ({ default: module.Dashboard })))
const UserList = lazy(() => import('../containers/User').then((module) => ({ default: module.UserList })))
const UserForm = lazy(() => import('../containers/User').then((module) => ({default: module.UserForm})))

function MainRoute() {
    return (
        <Fragment>
            <Loader />
            <CustomRouter history={history}>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/login" element={<Login />} />

                    <Route path="/" element={<PrivateRoute />}>
                        <Route exact path="dashboard" element={<Dashboard />} />
                        <Route exact path="user" element={<UserList />} />
                        <Route exact path="user/create" element={<UserForm />} />
                        <Route exact path="user/edit/:id" element={<UserForm />} />
                        {/*Page Not Found*/}
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </CustomRouter>
        </Fragment>
    )
}

export default MainRoute
