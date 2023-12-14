import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { List } from './list';
import { appStore } from '../../store/store.ts';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { useOffers } from '../../hooks/use.offers.tsx';
// import { Offer } from '../../model/offer.ts';
// import { OfferCard } from '../offer/offer.tsx';
// import { Offer } from '../../model/offer.ts';

// jest.mock('../offer/offer');

// jest.mock('../../hooks/use.offers.tsx', () => ({
//   useOffers: jest.fn().mockReturnValue({
//     offers: [] as unknown as Offer[],
//     loadOffers: jest.fn(),
//   }),
// }));

describe('Given List component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      // const url = new URL('https://www.test.com');
      // const mockOffer = {
      //   offerURL: url,
      //   description:
      //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
      //   author: {
      //     userName: 'Abel',
      //   },
      //   image: {
      //     cloudinaryURL: 'test',
      //   },
      // } as unknown as Offer;

      render(
        <Provider store={appStore}>
          <Router>
            <List></List>
          </Router>
        </Provider>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('main');
      expect(element).toBeInTheDocument();
    });

    // test('Then should render each clothing item', () => {
    //   const clothingItems = useOffers.offers;
    //   clothingItems.forEach((item) => {
    //     const cardElement = screen.getByText(item.name);
    //     expect(cardElement).toBeInTheDocument();
    //   });
    // });
  });
});
