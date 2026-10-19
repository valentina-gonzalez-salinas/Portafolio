import React from 'react';
import { Button } from 'antd';

export const CustomButton = ({ children, type = "primary", htmlType = "button", onClick, icon }) => (
  <Button type={type} htmlType={htmlType} onClick={onClick} icon={icon}>
    {children}
  </Button>
);