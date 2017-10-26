import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from "@angular/material";
import {ScreenAlertComponent} from "./screen-alert/screen-alert.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Elkon';
  sizeX: number;
  sizeY: number;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.sizeX = window.screen.width;
    this.sizeY = window.screen.height;
    //if (this.sizeX<this.sizeY && this.sizeX<=450) this.callAlert();
  }

  callAlert(): void {
  this.dialog.open(ScreenAlertComponent,{
    data: {sizeX: this.sizeX, sizeY: this.sizeY}
  });
  }

}
