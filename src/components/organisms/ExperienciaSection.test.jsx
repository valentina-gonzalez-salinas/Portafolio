import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ExperienceSection } from './ExperienciaSection';

describe('Componente ExperienciaSection', () => {
  it('debe mostrar el título de Experiencia Laboral', () => {
    render(<ExperienceSection />);
    const titulo = screen.getByText(/Experiencia Laboral/i);
    expect(titulo).toBeInTheDocument();
  });
});