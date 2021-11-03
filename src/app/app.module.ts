import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { PaymentDetailFormComponent } from './components/payment-detail-form/payment-detail-form.component';
import { PaymentDetailTableComponent } from './components/payment-detail-table/payment-detail-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailFormComponent,
    PaymentDetailTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
