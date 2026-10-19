import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ContactForm } from './ContactForm';

describe('Componente ContactForm', () => {
  it('debe renderizarse correctamente con su contenedor id', async () => {
    render(<ContactForm />);
    await waitFor(() => {
      const card = document.getElementById('contacto');
      expect(card).toBeInTheDocument();
    });
  });
});