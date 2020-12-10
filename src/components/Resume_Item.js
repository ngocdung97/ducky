import React, { Component } from "react";

class Resume_Item extends Component {
  render() {
    return (
      <li className={this.props.position}>
        <div className="timeline-badge">
          <i className="icon-suitcase" />
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
    <h3 className="timeline-title">{this.props.title}</h3>
            <span className="company">{this.props.company}</span>
          </div>
          <div className="timeline-body">
            <p>
                {this.props.detail}
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default Resume_Item;
