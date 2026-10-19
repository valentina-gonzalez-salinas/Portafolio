import React from 'react';
import { Card, List, Typography, Tag } from 'antd';
import { SectionTitle } from '../atoms/SectionTitle';
import { education } from "../../data/portafolioData";

const { Text } = Typography;

export const EducacionSection = () => (
  <Card id="estudios" style={{ marginBottom: 24 }}>
    <SectionTitle>Estudios y Formación</SectionTitle>
    <List
      itemLayout="horizontal"
      dataSource={education}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={<Text bold style={{ fontSize: 16 }}>{item.degree}</Text>}
            description={`${item.institution} | ${item.period}`}
          />
          <Tag color={
            item.period.includes('Cursando') 
              ? 'green' 
              : item.degree.includes('Gastronomía') 
                ? 'orange' 
                : 'blue'
          }>
            {item.period.includes('Cursando') ? 'En curso' : 'Titulada / Completado'}
          </Tag>
        </List.Item>
      )}
    />
  </Card>
);