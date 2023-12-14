import { serverUrl } from '../config';
import { Offer } from '../model/offer';

export class OffersRepo {
  apiUrl: string;

  constructor(public token: string) {
    this.apiUrl = serverUrl + '/offer';
  }

  async getOffers(): Promise<Offer[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
