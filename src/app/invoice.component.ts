import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class invoiceComponent {
  constructor (private http: HttpClient){}

  Customer:any = {
    "id": "",
    "logo": "",
    "from": "",
    "bill_to": "",
    "address": "",
    "date": "",

  }

  Items: any = {
    "notes":"",
    "items":[]
  }

  OtherCharges: any = {
    "discount": 0,
    "tax_after_discount": 0,
    "shipping": 0,
    "prepaid": 0
  }

  subTotal: number = 0;
  amountPaid: number = 0;

  totalBalance: number = 0;
  ngOnInit(){
    this.loadCustomer();
    this.loadItems();
    this.loadOtherCharges();
  }

  loadCustomer():void {
    this.http.get<any>('../assets/json/invoice.json')
      .subscribe((data: any) => {
        this.Customer = data;
        console.log(this.Customer);
      })
  }

  loadItems():void {
    this.http.get<any>('../assets/json/items.json')
      .subscribe((data:any)=>{
        this.Items = data;
        console.log(this.Items);
      })
  }

  loadOtherCharges():void {
    this.http.get<any>('../assets/json/other_charges.json')
      .subscribe((data:any) => {
        this.OtherCharges = data;
        console.log(this.OtherCharges);
      })
  }

  calSubTotal(subTotal: number){
    this.subTotal = subTotal;

    this.calBalance();
  }

  calAmountPaid(amountPaid: number){
    this.amountPaid = amountPaid;

    this.calBalance();
  }

  calBalance():void {
    let val = (this.subTotal - this.amountPaid);

    this.totalBalance = val;
  }
}
