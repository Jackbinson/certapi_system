import React from 'react';
import '../styleguide.css';
import '../style.css';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="overlap">
        <img className="image" alt="Image" src="image-2.png" />
        <div className="text-wrapper-4">Chào mừng đến với Dịch vụ của chúng tôi</div>
        <p className="p">Chúng tôi cung cấp các giải pháp tốt nhất cho nhu cầu của bạn</p>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="text-wrapper-5">Tìm hiểu thêm</div>
          </div>
        </div>
      </div>
    </div>
  );
};
