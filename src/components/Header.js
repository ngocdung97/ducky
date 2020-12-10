import React, { Component } from "react";
import User from "../images/buingocdung.png";
import Background from '../images/cover_bg_3.jpg'

class Header extends Component {
  render() {
    return (
      <div>
        <div className="fh5co-loader"></div>
        <header
          id="fh5co-header"
          className="fh5co-cover js-fullheight"
          role="banner"
          style={{ backgroundImage: `url(${Background})` }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="display-t js-fullheight">
                  <div
                    className="display-tc js-fullheight animate-box"
                    data-animate-effect="fadeIn"
                  >
                    <div
                      className="profile-thumb"
                      style={{ backgroundImage: `url(${User})` }}
                    />
                    <h1>
                      <span>Bui Ngoc Dung</span>
                    </h1>
                    <h3>
                      <span>Fullstack Developer</span>
                    </h3>
                    <p></p>
                    <ul className="fh5co-social-icons">
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={this.props.facebook}
                        >
                          <i className="icon-facebook2" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={this.props.instagram}
                        >
                          <i className="icon-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={this.props.github}
                        >
                          <i className="icon-github" />
                        </a>
                      </li>
                      <li>
                        <a href={this.props.tel}>
                          <i className="icon-phone3" />
                        </a>
                      </li>
                    </ul>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
