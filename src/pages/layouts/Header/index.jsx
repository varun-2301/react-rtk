import React from 'react'

import HeaderStyle from './style'
import { loginRedirect } from '../../../utils'
import { resetLoggedUserData } from '../../../containers/Login/store'

const Header = () => {
    /**method to call action and redirect to home page */
    const _loggedOutUser = () => {
        resetLoggedUserData()
        loginRedirect()
    }

    return (
        <HeaderStyle>
            <nav className="navbar fixed-top navbar-expand-md bg-info mb-3">
                <div className="flex-row d-flex">
                    <button
                        type="button"
                        className="navbar-toggler mr-2 "
                        data-toggle="offcanvas"
                        title="Toggle responsive left sidebar"
                    >
                        <span className="navbar-toggler-icon"></span>
                        <i className="fa fa-bars"></i>
                    </button>
                    <h4 className="ms-3">Admin Template</h4>
                </div>

                <button className="btn btn-primary align-right" onClick={() => _loggedOutUser()}>
                    Logout
                </button>
            </nav>
        </HeaderStyle>
    )
}

export default Header
