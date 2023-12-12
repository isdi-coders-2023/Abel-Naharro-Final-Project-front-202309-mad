import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SubHeaders } from './subHeader';

describe('Given SubHeaders component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<SubHeaders></SubHeaders>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('tabpanel');
      expect(element).toBeInTheDocument();
    });
  });
});
