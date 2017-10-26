import {Injectable} from "@angular/core";

@Injectable()
export class LoaderService {

  loading: boolean;

  constructor() {
    this.loading = false;
  }

  onLoad(): void {
    this.loading = true;
  }

  offLoad(): void {
    this.loading = false;
  }

  isLoading(): boolean {
    return this.loading;
  }

}
