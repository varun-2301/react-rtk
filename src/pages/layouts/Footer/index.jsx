import React from 'react'

import FooterStyle from './style'

const Footer = () => {
    return (
        <FooterStyle>
            <footer className="main-footer fixed-bottom">
                <strong>Copyright © 2014-{new Date().getFullYear()}</strong>
            </footer>
        </FooterStyle>
    )
}

export default Footer
