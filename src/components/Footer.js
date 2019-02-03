import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li><a href="https://twitter.com/blockspaceapp" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/BlockspaceApp/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.linkedin.com/company/blockspace/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://t.me/blockspaceapp" className="icon fa-telegram"><span className="label">Telegram</span></a></li>
            <li><a href="https://play.google.com/store/apps/details?id=ch.blockspace.blockspace" className="icon fa-android"><span className="label">Android</span></a></li>
            <li><a href="https://itunes.apple.com/gb/app/blockspace-crypto-markets/id1348078159" className="icon fa-apple"><span className="label">App-Store</span></a></li>
        </ul>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
