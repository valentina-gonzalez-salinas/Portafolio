import React from 'react';
import { Card, Tag, Typography, Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const ProjectCard = ({ title, category, description, link }) => (
  <Card hoverable style={{ width: '100%', height: '100%' }}>
    <Tag color="blue">{category}</Tag>
    <Title level={4} style={{ marginTop: 8 }}>{title}</Title>
    <Paragraph>{description}</Paragraph>
    <Button type="outline" icon={<GithubOutlined />} href={link} target="_blank">
      Ver Repositorio
    </Button>
  </Card>
);