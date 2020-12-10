import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <div id="fh5co-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  © 2020 React JS. All Rights Reserved. <br />
                  Designed by Bui Ngoc Dung                  
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="gototop js-top">
          <a href="/#" className="js-gotop">
            <i className="icon-arrow-up22" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
