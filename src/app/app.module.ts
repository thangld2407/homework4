import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { invoiceComponent } from './invoice.component';

import { headerComponent } from './components/header/header.component';
import { itemsComponent } from './components/items/items.component';
import { balanceInvoice } from './components/balance/balance.component';
@NgModule({
  declarations: [invoiceComponent, headerComponent, itemsComponent, balanceInvoice],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  bootstrap: [invoiceComponent]
})
export class AppModule { }
