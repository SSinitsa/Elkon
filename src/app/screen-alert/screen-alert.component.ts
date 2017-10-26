import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import * as $ from 'jquery';

@Component({
  selector: 'app-screen-alert',
  templateUrl: './screen-alert.component.html',
  styleUrls: ['./screen-alert.component.css']
})
export class ScreenAlertComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ScreenAlertComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    $('#screen-orientation').css('height', this.data.sizeY+'px');
    $('#screen-orientation').css('width', this.data.sizeX+'px');
  }

  orientationListener(): void {
    const scrSizeX = window.screen.width;
    const scrSizeY = window.screen.height;
    if (scrSizeY < scrSizeX) this.dialogRef.close();
  }

}
