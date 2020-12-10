import React, { Component } from "react";

import Data from "../data.json";
import Resumeitem from "./Resume_Item";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
        WorkExperience: [],
        Education : []
    };
  }

  componentDidMount() {
    this.setState ({
        WorkExperience : Data.data.WorkExperience,
        Education : Data.data.Education
    })
  }

  renderWorkExperience = () => {
    if (this.state.WorkExperience)
      return this.state.WorkExperience.map((item, key) => {
        return (
          <Resumeitem key={key}
            position={item.position}
            title={item.title}
            company={item.company}
            detail={item.detail}
          ></Resumeitem>
        );
      });
  };

  renderEducation = () => {
    if (this.state.Education)
      return this.state.Education.map((item, key) => {
        return (
          <Resumeitem key={key}
            position={item.position}
            title={item.title}
            company={item.company}
            detail={item.detail}
          ></Resumeitem>
        );
      });
  };

  render() {
    return (
      <div id="fh5co-resume" className="fh5co-bg-color">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>Sơ Yếu Lý Lịch</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-md-offset-0">
              <ul className="timeline">
                <li className="timeline-heading text-center animate-box">
                  <div>
                    <h3>Kinh Nghiệm Làm Việc</h3>
                  </div>
                </li>
                {this.renderWorkExperience()}

                <br />
                <li className="timeline-heading text-center animate-box">
                  <div>
                    <h3>Học Vấn</h3>
                  </div>
                </li>
                {this.renderEducation()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
