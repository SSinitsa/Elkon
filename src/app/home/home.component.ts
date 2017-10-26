import {Component, Inject, OnInit} from '@angular/core';
import {LoaderService} from "../service/loader.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(@Inject('loaderService') private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loaderService.offLoad();
  }

load(): void {
    this.loaderService.onLoad();
}

isLoading(): boolean {
    return this.loaderService.isLoading();
}

}
