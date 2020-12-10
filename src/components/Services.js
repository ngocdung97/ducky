import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <div id="fh5co-features" className="animate-box">
        <div className="container">
          <div className="services-padding">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2>My Services</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 text-center">
                <div className="feature-left">
                  <span className="icon">
                    <i className="icon-genius" />
                  </span>
                  <div className="feature-copy">
                    <h3>Web Design</h3>
                    <p>
                    Hoàn chỉnh Các thiết kế sẽ được chuyển cho các nhà phát triển web để viết mã HTML, Bootstrap 4.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="feature-left">
                  <span className="icon">
                    <i className="icon-code" />
                  </span>
                  <div className="feature-copy">
                    <h3>WEB DEVELOPMENT</h3>
                    <p>
                    Thiết kế cấu trúc cốt lõi của trang web. 
                    Phát triển back-end sử dụng các ngôn ngữ phần mềm như SQL và C#, Python ..
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="feature-left">
                  <span className="icon">
                    <i className="icon-windows2" />
                  </span>
                  <div className="feature-copy">
                    <h3>WINDOW DEVELOPMENT</h3>
                    <p>
                    Cung cấp một nền tảng thống nhất để xây dựng giao diện người dùng, 
                    cho phép người lập trình và người thiết kế giao diện làm việc cùng nhau một cách dễ dàng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 text-center">
                <div className="feature-left">
                  <span className="icon">
                    <i className="icon-refresh" />
                  </span>
                  <div className="feature-copy">
                    <h3>CÔNG CỤ AUTO & MOD</h3>
                    <p>
                    Đó là sự kết hợp giữa giả lập các thao tác nhấn phím, di chuyển chuột và thao tác trên cửa sổ 
                    (điều khiển là các đối tượng tương tác trên cửa sổ, chẳng hạn như các nút) 
                    để tự động thực hiện công việc theo cách không thể thực hiện được 
                    hoặc không chính xác.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="feature-left">
                  <span className="icon">
                    <i className="icon-paintbrush" />
                  </span>
                  <div className="feature-copy">
                    <h3>THIẾT KẾ ĐỒ HỌA (CANVA)</h3>
                    <p>
                    Thiết kế áp phích phim, 
                    biển quảng cáo với thông điệp thú vị, 
                    áp phích tuyên truyền hoặc tạp chí thanh lịch ...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="feature-left">
                  <span className="icon">
                    <i className="icon-credit-card" />
                  </span>
                  <div className="feature-copy">
                    <h3>VISIT CARD</h3>
                    <p>
                    Nhập thông tin cá nhân trên thẻ NFC. 
                    thuận tiện cho các cá nhân trao đổi thông tin.
                    </p>
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

export default Services;
