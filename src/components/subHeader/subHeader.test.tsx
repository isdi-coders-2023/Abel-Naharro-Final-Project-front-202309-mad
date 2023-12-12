import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Subheader } from './subheader';

describe('Given SubHeaders component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Subheader></Subheader>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('tabpanel');
      expect(element).toBeInTheDocument();
    });
  });
});
