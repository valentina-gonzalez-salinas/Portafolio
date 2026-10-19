import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EducacionSection } from './EducacionSection';

describe('Componente EducacionSection', () => {
  it('debe renderizar la sección de educación', () => {
    render(<EducacionSection />);
    const card = document.getElementById('estudios');
    expect(card).toBeInTheDocument();
  });
});