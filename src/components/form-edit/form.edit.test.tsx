import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { FormEdit } from './form.edit';

describe('Given FormEdit component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <FormEdit></FormEdit>
          </Provider>
        </BrowserRouter>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('form');
      expect(element).toBeInTheDocument();
    });

    test('Then it should display the offer image', () => {
      const imageElement = screen.getByAltText('offer image');
      expect(imageElement).toBeInTheDocument();
    });

    test('Then it should display the offer title', () => {
      const titleElement = screen.getByLabelText('Title');
      expect(titleElement).toBeInTheDocument();
      expect(titleElement).toHaveValue('Sample Title'); // Replace 'Sample Title' with the actual default value
    });

    test('Then it should display the offer description', () => {
      const descriptionElement = screen.getByLabelText('Description');
      expect(descriptionElement).toBeInTheDocument();
      expect(descriptionElement).toHaveValue('Sample Description'); // Replace 'Sample Description' with the actual default value
    });

    test('Then it should display the regular price', () => {
      const regularPriceElement = screen.getByLabelText('Regular price');
      expect(regularPriceElement).toBeInTheDocument();
      expect(regularPriceElement).toHaveValue(100); // Replace 100 with the actual default value
    });

    test('Then it should display the offer price', () => {
      const offerPriceElement = screen.getByLabelText('Offer price');
      expect(offerPriceElement).toBeInTheDocument();
      expect(offerPriceElement).toHaveValue(50); // Replace 50 with the actual default value
    });

    test('Then it should display the coupon', () => {
      const couponElement = screen.getByLabelText('Coupon');
      expect(couponElement).toBeInTheDocument();
      expect(couponElement).toHaveValue('SAMPLECOUPON'); // Replace 'SAMPLECOUPON' with the actual default value
    });

    test('Then it should display the offer URL', () => {
      const offerURLElement = screen.getByLabelText('Url offer');
      expect(offerURLElement).toBeInTheDocument();
      expect(offerURLElement).toHaveValue('https://example.com'); // Replace 'https://example.com' with the actual default value
    });

    test('Then it should display the category', () => {
      const categoryElement = screen.getByLabelText('Category');
      expect(categoryElement).toBeInTheDocument();
      expect(categoryElement).toHaveValue('mobiles'); // Replace 'mobiles' with the actual default value
    });

    test('Then it should display the edit offer button', () => {
      const editButtonElement = screen.getByRole('button', {
        name: 'Edit offer',
      });
      expect(editButtonElement).toBeInTheDocument();
    });
  });
});
