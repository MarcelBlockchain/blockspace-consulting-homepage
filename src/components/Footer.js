import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li><a href="https://twitter.com/blockspaceapp" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/BlockspaceApp/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="#" className="icon fa-telegram"><span className="label">Telegram</span></a></li>
            <li><a href="#" className="icon fa-android"><span className="label">Android</span></a></li>
            <li><a href="#" className="icon fa-apple"><span className="label">App-Store</span></a></li>
        </ul>
        {/* <p className="copyright">&copy; Gatsby Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p> */}
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
