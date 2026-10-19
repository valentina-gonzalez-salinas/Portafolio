import React from 'react';
import { Card, Timeline, Typography } from 'antd';
import { SectionTitle } from '../components/atoms/SectionTitle';
import { experiences } from "../data/portafolioData";

const { Text, Paragraph } = Typography;

export const ExperienceSection = () => (
  <Card id="experiencia" style={{ marginBottom: 24 }}>
    <SectionTitle>Experiencia Laboral</SectionTitle>
    <Timeline
      mode="alternate"
      items={experiences.map((exp) => ({
        children: (
          <div>
            <Text bold style={{ fontSize: 16 }}>{exp.role}</Text> — <Text type="secondary">{exp.company}</Text>
            <div><Text type="secondary" italic>{exp.period}</Text></div>
            <Paragraph style={{ marginTop: 8 }}>{exp.description}</Paragraph>
          </div>
        )
      }))}
    />
  </Card>
);