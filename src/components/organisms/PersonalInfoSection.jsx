import React from 'react';
import { Flex, Avatar, Typography, Card } from 'antd';
import { personalInfo } from "../../data/portafolioData";
import fotoPerfil from "../../assets/vale.jpg";;

const { Title, Paragraph, Text } = Typography;

export const PersonalInfoSection = () => (
  <Card id="personal" style={{ marginBottom: 24 }}>
    <Flex gap="large" align="center" wrap="wrap">
      <Avatar size={120} src={fotoPerfil} />
      <Flex vertical style={{ flex: 1 }}>
        <Title level={1} style={{ margin: 0 }}>{personalInfo.name}</Title>
        <Text type="secondary" style={{ fontSize: 18 }}>{personalInfo.title}</Text>
        <Paragraph style={{ marginTop: 12 }}>{personalInfo.bio}</Paragraph>
      </Flex>
    </Flex>
  </Card>
);