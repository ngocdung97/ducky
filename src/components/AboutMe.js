import React, { Component } from "react";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <div id="fh5co-about" className="animate-box">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2>GIỚI THIỆU</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <ul className="info">
                  <li>
                    <span className="first-block">Họ Tên:</span>
                    <span className="second-block">{this.props.fname}</span>
                  </li>
                  <li>
                    <span className="first-block">Điện Thoại:</span>
                    <span className="second-block">{this.props.phone}</span>
                  </li>
                  <li>
                    <span className="first-block">Email:</span>
                    <span className="second-block">{this.props.email}</span>
                  </li>
                  <li>
                    <span className="first-block">Website:</span>
                    <span className="second-block">{this.props.website}</span>
                  </li>
                  <li>
                    <span className="first-block">Địa Chỉ:</span>
                    <span className="second-block">{this.props.address} </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-7">
                <h2>Xin chào !!!!</h2>
                <p>
                  Hi ! Vẫn là Dũng đây. lần này cũng là 1 trang web nhưng mình
                  có thay đổi về framework reactjs. 1 website đơn giản để giới
                  thiệu bản thân. Đọc tiếp nào !!!!!
                </p>
                <p>
                  Năm nay mình đã gần 25 nồi bánh chưng rồi nhưng chưa bao giờ
                  ăn hại như bây giờ !!! kakaka dỡn thôi . Mình quê ở Thanh Hóa
                  nhưng sinh ra và lớn lên ở Kon Tum và hiện tại đang sinh hoạt
                  và làm việc tại TPHCM. Mình học trường ĐH Công Nghệ Sài Gòn
                  (STU) đọc là sờ tu nha ! Mình đã tốt nghiệp năm 2020 hơi muộn
                  hơn 1 năm do mình ăn chơi bỏ quên tuổi trẻ nên ra muộn nha.
                  Mình đã có hơn 1 năm kinh nghiệm về Fullstack Developer mảng
                  logistics. À quên ! có hơn 7 tháng thôi à còn lại mình đi thực
                  tập hết rồi kakaka. Mình biết khá nhiều ngôn ngữ như : SQL,
                  C#, ASP.NET, Reactjs, HTML,... nói dảy thôi chớ làm cùi lắm
                  hahaha
                </p>
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
