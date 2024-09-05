import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import CommonStyle from '../assets/css/style.js'
import Header from './layouts/Header'
import Sidebar from './layouts/Sidebar'
import Footer from './layouts/Footer'

const MainLayout = (props) => {
    /**hook equivalent to componentdidmount lifecycle */
    useEffect(() => {
        const canvas = document.querySelector('[data-toggle=offcanvas]')
        const row = document.querySelector('.row-offcanvas')
        canvas.addEventListener('click', function () {
            row.classList.toggle('active')
        })
    }, [])

    return (
        <CommonStyle>
            <Header {...props.children.props}></Header>
            <div className="container-fluid h-100" id="main">
                <div className="row row-offcanvas row-offcanvas-left h-100 active">
                    <Sidebar {...props.children.props}></Sidebar>
                    <div className="col main pt-5 mt-3">
                        {/** main content shows here */}
                        {props.children}

                        <Footer {...props.children.props}></Footer>
                    </div>
                </div>
            </div>
        </CommonStyle>
    )
}

MainLayout.propTypes = {
    children: PropTypes.objectOf(PropTypes.any),
}

export default MainLayout
