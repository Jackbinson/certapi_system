import React from 'react';
import { ServiceCard } from '../ui/ServiceCard';
import '../styleguide.css';
import '../style.css';

export const Services = () => {
  return (
    <div className="services">
      <div className="text-wrapper-6">Dịch vụ của chúng tôi</div>
      <div className="frame">
        <ServiceCard
          className="service-card-instance"
          divClassName="design-component-instance-node"
          text="Dịch vụ 1"
          text1="Mô tả ngắn gọn về dịch vụ 1"
        />
        <ServiceCard
          className="service-card-instance"
          divClassName="design-component-instance-node"
          text="Dịch vụ 2"
          text1="Mô tả ngắn gọn về dịch vụ 2"
        />
        <ServiceCard
          className="service-card-instance"
          divClassName="design-component-instance-node"
          text="Dịch vụ 3"
          text1="Mô tả ngắn gọn về dịch vụ 3"
        />
      </div>
    </div>
  );
};
