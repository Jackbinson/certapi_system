import PropTypes from "prop-types";
import React from "react";
import "../styleguide.css";
import "../style.css";

export const ServiceCard = ({ className, divClassName, text = "Dịch vụ 1", text1 = "Mô tả ngắn gọn về dịch vụ 1" }) => {
  return (
    <div className={`service-card ${className}`}>
      <div className={`text-wrapper-8 ${divClassName}`}>{text}</div>
      <p className="text-wrapper-9">{text1}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  className: PropTypes.string,
  divClassName: PropTypes.string,
};
