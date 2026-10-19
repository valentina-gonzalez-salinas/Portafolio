import React, { useState } from 'react';
import { Flex, Radio } from 'antd';
import { projects } from '../../data/portafolioData'; // O portafolioData según cómo lo importes

export const ProjectsSection = () => {
  const [filter, setFilter] = useState('Todos');

  const filteredProjects = filter === 'Todos'
    ? projects
    : projects.filter((project) => project.category === filter);

  return (
    <div id="proyectos">
      <Flex gap="middle" vertical style={{ marginTop: 16 }}>
        <Radio.Group 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)} 
          buttonStyle="solid"
        >
          <Radio.Button value="Todos">Todos</Radio.Button>
          <Radio.Button value="React">React</Radio.Button>
          <Radio.Button value="JavaScript">JavaScript</Radio.Button>
        </Radio.Group>
      </Flex>

      <div style={{ marginTop: 16 }}>
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};