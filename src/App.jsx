import React from "react";
import { Layout, ConfigProvider, Menu } from "antd";


import { ExperienceSection } from "./components/organisms/ExperienciaSection.jsx";
import { PersonalInfoSection } from "./components/organisms/PersonalInfoSection.jsx";
import { EducacionSection } from "./components/organisms/EducacionSection.jsx";
import { ProjectsSection } from "./components/organisms/ProjectsSection.jsx";
import { ContactForm } from "./components/organisms/ContactForm.jsx";
import { FooterSection } from "./components/organisms/FooterSection.jsx";

const { Header, Content } = Layout;

const navItems = [
  { key: 'personal', label: <a href="#personal">Personal</a> },
  { key: 'experiencia', label: <a href="#experiencia">Experiencia</a> },
  { key: 'estudios', label: <a href="#estudios">Estudios</a> },
  { key: 'proyectos', label: <a href="#proyectos">Proyectos</a> },
  { key: 'contacto', label: <a href="#contacto">Contacto</a> },
];

const App = () => (
  <ConfigProvider>
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%', display: 'flex', alignItems: 'center' }}>
        <div style={{ color: '#fff', fontWeight: 'bold', fontSize: 18, marginRight: 24 }}>
          Valentina González Salinas
        </div>
        <Menu theme="dark" mode="horizontal" items={navItems} style={{ flex: 1, minWidth: 0 }} />
      </Header>

      <Content style={{ padding: '24px 48px', maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        <PersonalInfoSection />
        <ExperienceSection />
        <EducacionSection />
        <ProjectsSection />
        <ContactForm />
      </Content>

      <FooterSection />
    </Layout>
  </ConfigProvider>
);

export default App;