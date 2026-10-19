import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FooterSection } from './FooterSection';

describe('Componente FooterSection', () => {
  it('debe mostrar la información del pie de página', () => {
    render(<FooterSection />);
    expect(screen.getByText(/Valentina González/i)).toBeInTheDocument();
  });
});