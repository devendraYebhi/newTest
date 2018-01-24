import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-popup-table-city',
  templateUrl: './popup-table-city.component.html',
  styleUrls: ['./popup-table-city.component.scss']
})
export class PopupTableCityComponent {

  constructor(public dialogRef: MatDialogRef<PopupTableCityComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
