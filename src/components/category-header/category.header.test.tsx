import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CategoryHeader } from './category.header';
import userEvent from '@testing-library/user-event';

describe('Given SubHeaders component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<CategoryHeader></CategoryHeader>);
    });

    test('Then it should be in the document', async () => {
      const element = screen.getByRole('button');
      await userEvent.click(element);
    });
  });
});
