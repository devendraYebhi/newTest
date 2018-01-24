import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-popup-table-equp',
  templateUrl: './popup-table-equp.component.html',
  styleUrls: ['./popup-table-equp.component.scss']
})
export class PopupTableEqupComponent implements OnInit {

  constructor(public dialogEqup: MatDialogRef<PopupTableEqupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  onNoClick(): void {
    this.dialogEqup.close();
  }
  ngOnInit() {
  }

}
