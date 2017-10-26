import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

const DATA_URL = '../../assets/data/';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  getProductBrands(): Promise<string[]> {
    return this.http.get<string[]>(DATA_URL + 'product-brands.json')
      .toPromise();
  }

  getVendorBrands(): Promise<string[]> {
    return this.http.get<string[]>(DATA_URL + 'vendor-brands.json')
      .toPromise();
  }

}
