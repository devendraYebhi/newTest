import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {

  constructor(public loadingPopup: MatDialogRef<LoadingSpinnerComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    loadingPopup.disableClose = true;
  }


  ngOnInit() {
  }

}
