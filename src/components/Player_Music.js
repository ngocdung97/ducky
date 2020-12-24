import React, { Component } from "react";

export default class Player_Music extends Component {
  render() {
    return (
      <div id="app-cover">
        <div id="player">
          <div id="player-track">
            <div id="album-name" />
            <div id="track-name" />
            <div id="track-time">
              <div id="current-time" />
              <div id="track-length" />
            </div>
            <div id="s-area">
              <div id="ins-time" />
              <div id="s-hover" />
              <div id="seek-bar" />
            </div>
          </div>
          <div id="player-content">
            <div id="album-art">
              <img
                src="https://data.chiasenhac.com/data/cover/133/132943.jpg"
                className="active"
                id="_1"
                alt=""
              />
              <img
                src="https://data.chiasenhac.com/data/cover/53/52514.jpg"
                id="_2"
                alt=""
              />
              <img
                src="https://data.chiasenhac.com/data/artist_avatar/1/501.jpg"
                id="_3"
                alt=""
              />
              <img
                src="https://data.chiasenhac.com/data/cover/80/79763.jpg"
                id="_4"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_5.jpg"
                id="_5"
                alt=""
              />
              <div id="buffer-box">Buffering ...</div>
            </div>
            <div id="player-controls">
              <div className="control">
                <div className="button" id="play-previous">
                  <i className="icon-previous" />
                </div>
              </div>
              <div className="control">
                <div className="button" id="play-pause-button">
                  <i className="icon-play" />
                </div>
              </div>
              <div className="control">
                <div className="button" id="play-next">
                  <i className="icon-next2" />
                </div>
              </div>
              <div className="control">
                <div className="button" id="play-loop">
                  <i className="icon-loop" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
