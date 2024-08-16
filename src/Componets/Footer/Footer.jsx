import React from 'react'
import './footer.css'

import facebookIcon from '../../assets/facebook_icon.png'
import instaIcon from '../../assets/instagram_icon.png'
import tweetIcon from '../../assets/twitter_icon.png'
import ytIcon from '../../assets/youtube_icon.png'

function Footer() {
  return (
    <>
      <div className="container-footer">
            <div className="conatiner-media-icon">

                <img src={facebookIcon} alt="" />
                <img src={instaIcon} alt="" />
                <img src={tweetIcon} alt="" />
                <img src={ytIcon} alt="" />

            </div>
            <div className="container-navgation-links">
                <ul>
                  <li>Audio Description</li>
                  <li>Help Center</li>
                  <li>Gift Cards</li>
                  <li>Media Center</li>
                  <li>Investor Relations</li>
                  <li>Jobs</li>
                  <li>Terms of Use</li>
                  <li>Privacy</li>
                  <li>Legal Notices</li>
                  <li>Cookie Preferences</li>
                  <li>Coparate Information</li>
                  <li>Contact Us</li>
                </ul>
            </div>
            <div className="contianer-copyright">
              <p>© 1977-2024 Netfix.inc</p>
            </div>
      </div>
    </>
  )
}

export default Footer