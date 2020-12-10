import React, { Component } from 'react';

class Skill extends Component {
    render() {
        return (
            <div id="fh5co-skills" className="animate-box">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                  <h2>Skills</h2>
                </div>
              </div>
              <div className="row row-pb-md">
                <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                  <div className="chart" data-percent={6}><span><strong>HTML5</strong>6%</span></div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                  <div className="chart" data-percent={6}><span><strong>CSS3</strong>6%</span></div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                  <div className="chart" data-percent={7}><span><strong>React JS</strong>7%</span></div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                  <div className="chart" data-percent={8}><span><strong>C#</strong>8%</span></div>
                </div>
                <div className="col-sm-6 col-xs-12 text-center">
                  <div className="chart" data-percent={9}><span><strong>SQL Server</strong>9%</span></div>
                </div>
                <div className="col-sm-6 col-xs-12 text-center">
                  <div className="chart" data-percent={10}><span><strong>ASP.NET</strong>10%</span></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="progress-wrap">
                    <h3><span className="name-left">HTML5</span><span className="value-right">6%</span></h3>
                    <div className="progress">
                      <div className="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar" aria-valuenow={6} aria-valuemin={0} aria-valuemax={100} style={{width: '6%'}}>
                      </div>
                    </div>
                  </div>
                  <div className="progress-wrap">
                    <h3><span className="name-left">CSS3</span><span className="value-right">6%</span></h3>
                    <div className="progress">
                      <div className="progress-bar progress-bar-2 progress-bar-striped active" role="progressbar" aria-valuenow={6} aria-valuemin={0} aria-valuemax={100} style={{width: '6%'}}>
                      </div>
                    </div>
                  </div>
                  <div className="progress-wrap">
                    <h3><span className="name-left">React JS</span><span className="value-right">7%</span></h3>
                    <div className="progress">
                      <div className="progress-bar progress-bar-4 progress-bar-striped active" role="progressbar" aria-valuenow={7} aria-valuemin={0} aria-valuemax={100} style={{width: '7%'}}>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="progress-wrap">
                    <h3><span className="name-left">C#</span><span className="value-right">8%</span></h3>
                    <div className="progress">
                      <div className="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar" aria-valuenow={8} aria-valuemin={0} aria-valuemax={100} style={{width: '8%'}}>
                      </div>
                    </div>
                  </div>                  
                  <div className="progress-wrap">
                    <h3><span className="name-left">SQL Server</span><span className="value-right">9%</span></h3>
                    <div className="progress">
                      <div className="progress-bar progress-bar-6 progress-bar-striped active" role="progressbar" aria-valuenow={9} aria-valuemin={0} aria-valuemax={100} style={{width: '9%'}}>
                      </div>
                    </div>
                  </div>
                  <div className="progress-wrap">
                    <h3><span className="name-left">ASP.NET</span><span className="value-right">10%</span></h3>
                    <div className="progress">
                      <div className="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} style={{width: '10%'}}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}

export default Skill;