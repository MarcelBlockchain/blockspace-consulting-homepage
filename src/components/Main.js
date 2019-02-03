import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.png'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.png'
import marcel from '../images/marcel.jpg'
import costa from '../images/costa.jpg'



class Main extends React.Component {
  render() {

    const close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    const link = <a href={'https://medium.com/blockspace-ch/blockspace-app-update-8b0e94085a7b'}>click here</a>
    const ios = <a href={'https://itunes.apple.com/gb/app/blockspace-crypto-markets/id1348078159'}>iOS</a>
    const android = <a href={'https://play.google.com/store/apps/details?id=ch.blockspace.blockspace'}>Android</a>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Constantin and Marcel are world travellers that love to hack around with the latest Blockchain tech, especially EOS, and help others to do so.</p>
          <p>If they are not at a big Blockchain event or hackathon near you, they probably rented a house at the beach for a 'work hard, enjoy hard' work-cation.</p>
          <span className="image main"><img src={pic01} alt="" /></span>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Recently Blockspace published their app to compare and track crypto currencies in a unique way.
Since they weren't satisfied with current crypto market apps, they programmed their own.</p>
          <p>The Blockspace app let's you compare crypto coins in a unique and efficient way. Checking graphs and sharing them with your friends, has never been that easy before. Read about our latest update {link}</p>
          <p>Available for {ios} and {android}</p>

          <span className="image main"><img src={pic04} alt="" /></span>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={costa} alt="" /></span>
          <p>Constantin started researching blockchains and trading the crypto markets in 2015, since then he advises about the technology and periodically manages crypto portfolios for selected clients.</p>
          <p>Constantin is currently pursuing a MSc in Digital Currency where he focuses on Proof of Stake research, prior he completed a BSc in Banking and International Finance with a thesis about Blockchain's Potential for Financial Disintermediation.</p>
          <p>In early 2017 Constantin expanded his skills in the field of computer science, which he now uses to crypto analytics tools and smart contracts for his startup Blockspace. Previously Constantin has gained experience within commercial banking and FinTech startups.</p>
          <span className="image main"><img src={marcel} alt="" /></span>
          <p>Marcel has visited 20 countries, lived on 3 continents and speaks 4 languages. Everything that brings progress and freedom fascinates him. He writes Smart Contracts for the EOS Blockchain, Apps, Websites, Servers and consults Blockchain start-ups.</p>
          <p>He publishes his open source work to Github. Like recently an improved graph library for apps, and a Docker package to spin an EOS node within a few clicks to query transaction data for businesses.</p>
          <p>Because of his help, 200k+ users can use EOS in the 'Edge Wallet'. Currently Marcel works on a Website to strengthen democracy on the EOS Blockchain, also called 'user proposals'.</p>
          {close}
        </article>

        {/* <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article> */}

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main