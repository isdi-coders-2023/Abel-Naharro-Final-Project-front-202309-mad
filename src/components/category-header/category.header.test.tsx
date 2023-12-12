import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CategoryHeader } from './category.header';

describe('Given SubHeaders component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<CategoryHeader></CategoryHeader>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('tabpanel');
      expect(element).toBeInTheDocument();
    });
  });
});
