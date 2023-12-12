import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Offer } from './offer';

describe('Given Offer component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Offer></Offer>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('contentinfo');
      expect(element).toBeInTheDocument();
    });
  });
});
