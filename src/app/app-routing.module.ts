import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { DetailTableComponent } from './detail-table/detail-table.component'





const routes: Routes = [
  { path: '', component: SearchPageComponent, data: { depth: 1, pageTitle: "BNSF | SPM | Home" }, pathMatch: 'full' },
  { path: 'detail', component: DetailTableComponent, data: { depth: 2, pageTitle: "BNSF | SPM | Details" } },
  { path: 'detail/:id', component: DetailTableComponent, data: { depth: 3, pageTitle: "BNSF | SPM | ID Detail" }, pathMatch: 'full' },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
