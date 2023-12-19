import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Filter } from './filter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';

describe('Given Filter component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Filter></Filter>
          </Provider>
        </BrowserRouter>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('search');
      expect(element).toBeInTheDocument();
    });
  });
});
