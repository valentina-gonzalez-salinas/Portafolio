import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

export const SectionTitle = ({ children }) => (
  <Title level={2} style={{ marginTop: 24, marginBottom: 16, borderBottom: '2px solid #1677ff', display: 'inline-block' }}>
    {children}
  </Title>
);