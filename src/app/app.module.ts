import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatTableModule } from '@angular/material';
//import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
//import { MatDatepickerModule } from '@angular/material/datepicker';
//import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
import { HttpApiService } from './Services/http-api.service';
import { AppRoutingModule } from './app-routing.module'
import { HeaderComponent } from './header/header.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { DetailTableComponent } from './detail-table/detail-table.component';
import { PopupTableCityComponent } from './popup-table-city/popup-table-city.component';
import { PopupTableEqupComponent } from './popup-table-equp/popup-table-equp.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPageComponent,
    DetailTableComponent,
    PopupTableCityComponent,
    PopupTableEqupComponent,
    LoadingSpinnerComponent

  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MatDialogModule,
    MatButtonModule,
    NgxDatatableModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [PopupTableCityComponent, PopupTableEqupComponent], /** LoadingSpinnerComponent */
  providers: [HttpApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
