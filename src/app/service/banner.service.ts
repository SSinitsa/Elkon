import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Banners} from "../model/banners";
import "rxjs/add/operator/toPromise";

@Injectable()
export class BannerService {

  constructor (private http: HttpClient) {
  }

  getBanners(): Promise<string[]> {
    return this.http.get<Banners>('../../assets/banners/banner.config.json')
      .toPromise()
      .then(response => response.bannerList);
  }

}
