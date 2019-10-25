import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule }    from '@angular/common/http';




import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { ExamplePickup1Component } from './example-1/example-pickup-1/example-pickup-1.component';
import { ExampleDelivery1Component } from './example-1/example-delivery-1/example-delivery-1.component';
import { DriverSectionComponent } from './driver-section/driver-section.component';
import { ExampleInfoPage1Component } from './example-1/example-info-page-1/example-info-page-1.component';
import { PickupInfoService } from './pickup-info.service';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { TaskService } from './task.service';
import { DonationViewComponent } from './donation-view/donation-view.component';

import { PickupService } from './pickup.service';
import { PickupComponent } from './pickup/pickup.component';
import { DataService } from './search/services/data.service';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  {path:'list', component: ListComponent},
  {path:'example1', component: ExampleInfoPage1Component},
  {path:'search', component: SearchComponent},
  {path:'details/:taskID', component: DeliveryDetailsComponent},
  {path:'book-entry', component: DonationViewComponent},
];

@NgModule({
  imports:      [
    RouterModule.forRoot(routes), 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
    ],
 
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    SearchComponent, 
    ListComponent, 
    ExamplePickup1Component, 
    ExampleDelivery1Component, 
    DriverSectionComponent, 
    ExampleInfoPage1Component, 
    DeliveryDetailsComponent,
    DonationViewComponent,
    PickupComponent
    ],

  bootstrap:    [ AppComponent ],

  providers: [InMemoryDataService, PickupInfoService, TaskService, InMemoryDataService, PickupService, DataService],

  
  
})
export class AppModule { }
