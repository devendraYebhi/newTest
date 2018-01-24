import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';

import { GlobalUrls } from '../global.urls';


let url = 'https://reqres.in/api/users';
let shipmentData;
@Injectable()
export class HttpApiService {


  constructor(private _http: Http) { }
  public getAllPost(): Observable<any> {
    return this._http.get(url)
      .map(res => res.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }
  public getPost(id): Observable<any> {
    return this._http.get(`${url}/${id}`)
      .map(res => res.json())
      .do(data => console.log('id getPost do method', data))
      .catch(this.handleError);
  }

  public getShipmentData(id?: string): Observable<any> {
    let param = id ? `get/${id}` : 'getAll';
    let url = GlobalUrls.BASE_SHIPMENT_URL + param;

    return this._http.get(url)
      .timeout(5000)
      .map(res => res.json())
      .do(data => console.log(data))
      .catch(this.handleError)
  }
  /*public getShipmentById(id: any) {
    return Observable.create(observer => {
      this.getAllShipmentData().subscribe((res: Response) => {
        shipmentData = res;
        console.log("shipmentData :- " + shipmentData);
      }
      )
      setTimeout(() => {
        observer.next(shipmentData.find((data) => data.ShipmentSenderId == id))
      }, 1000);
    });
  }*/

  private handleError(error: Response) {
    //alert("Somthing went Wrong in Service API...");
    let message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(message);
  }
}
