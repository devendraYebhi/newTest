import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
//import { CartUpdateService } from '../Services/cart-update.service';
import { ActivatedRoute } from '@angular/router';
import { HttpApiService } from '../Services/http-api.service';


import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PopupTableCityComponent } from '../popup-table-city/popup-table-city.component';
import { PopupTableEqupComponent } from '../popup-table-equp/popup-table-equp.component';

//import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.scss']
})
export class DetailTableComponent implements OnInit {
  city_dialogRef: MatDialogRef<PopupTableCityComponent>;
  equp_dialogRef: MatDialogRef<PopupTableEqupComponent>;
  //loadingPopup: MatDialogRef<LoadingSpinnerComponent>;
  loading: boolean = true;
  currentValue: any;
  load: boolean = false;
  private id: string;
  private sub;
  private request;



  detailData = [];
  _tempData = [];
  //private cartService: CartUpdateService,
  constructor(private route: ActivatedRoute, private _http: HttpApiService, public dialog: MatDialog, private changeDetact: ChangeDetectorRef) {
    // this.openDialog();

  }
  /* ngAfterViewInit() {
     this.changeDetact.detectChanges();
     // this.loadingPopup = this.dialog.open(LoadingSpinnerComponent, {
     //   width: '100px',
     //   data: 'Loading... Please wait...'
     // });
   }*/
  ngOnInit() {
    // this.cartService.cast.subscribe(
    //   val => { this.currentValue = val }
    // );



    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    //console.log(this.id);
    /*this._http.getPost(this.id).subscribe(res => {
      this.detailData.push(res.data);
      this.load = true
    })*/
    if (this.id) {
      this.request = this._http.getShipmentData(this.id).subscribe(
        res => {
          if (res) {
            this._tempData.push(res);
            this.detailData = this._tempData;
            this.load = true;
            this.loading = false;
          }
        },
        err => {
          this.dialog.closeAll();
          alert("Somthing Went Wrong... Please try again!!! ");
        }
      )
    } else {
      this.request = this._http.getShipmentData().subscribe(
        res => {
          if (res) {
            this.detailData = res;
            this.load = true;
          }
        },
        err => {
          alert("Somthing Went Wrong... Please try again!!! ");
        }
      )
    }


  }

  // updateValue() {
  //   this.cartService.updateValue(this.currentValue);
  // }
  openDialog(data, title, type) {
    let _tamTableData = [];
    _tamTableData.push(data);
    let _dialogObj = {
      title: '',
      data: []
    };
    _dialogObj.data = _tamTableData
    if (type === 'city') {
      _dialogObj.title = title === 'origin' ? 'Origin City' : 'Destination City';
      this.city_dialogRef = this.dialog.open(PopupTableCityComponent, {
        width: '600px',
        data: _dialogObj
      });

    } else {
      _dialogObj.title = "Equpments"
      this.equp_dialogRef = this.dialog.open(PopupTableEqupComponent, {
        width: '600px',
        data: _dialogObj
      });
    }




    this.equp_dialogRef
    // console.log(data);
    //this.dialogRef.afterClosed().subscribe((result) => console.log(result))

  }
  private ngOnDestroy() {

    this.request.unsubscribe();
    this.sub.unsubscribe();
    console.log('request cancelled;')
  }


}
