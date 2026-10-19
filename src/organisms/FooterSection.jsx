import React, { useState, useEffect } from 'react';
import { Layout, Typography } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

export const FooterSection = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: '#fff', marginTop: 32 }}>
      <Text style={{ color: '#fff' }}>&copy; {year} Valentina González Salinas. Portafolio desarrollado en React & Ant Design.</Text>
    </Footer>
  );
};