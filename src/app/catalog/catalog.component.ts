import {Component, OnInit} from '@angular/core';
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  level1: string;
  level2: string;
  level3: string;
  level4: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
