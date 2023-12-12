import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Filter } from './filter';

describe('Given Filter component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Filter></Filter>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('search');
      expect(element).toBeInTheDocument();
    });
  });
});
