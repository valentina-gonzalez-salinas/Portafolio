import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PersonalInfoSection } from './PersonalInfoSection';

describe('Componente PersonalInfoSection', () => {
  it('debe renderizarse correctamente en el DOM', () => {
    render(<PersonalInfoSection />);
    const card = document.getElementById('personal');
    expect(card).toBeInTheDocument();
  });
});