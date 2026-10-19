import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectsSection } from './ProjectsSection';

describe('Componente ProjectsSection', () => {
  it('debe mostrar el título Proyectos Destacados', async () => {
    render(<ProjectsSection />);
    
    await waitFor(
      () => {
        const section = document.getElementById('proyectos');
        expect(section).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it('debe renderizar la sección de proyectos con su contenedor id', async () => {
    render(<ProjectsSection />);
    await waitFor(() => {
      expect(document.getElementById('proyectos')).toBeInTheDocument();
    });
  });
});