import { Component, EventEmitter, Input, Output } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component ({
  selector: 'balance-invoice',
  templateUrl: './balance.component.html',
  // styleUrls: './header.component.scss'
  styleUrls:["./balance.component.scss"]
})

export class balanceInvoice {
  constructor (private http: HttpClient){}

  @Input()  Items: any = {
    "notes":"",
    "items":[]
  }
  @Input() OtherCharges:any = {
    "discount": 0,
    "tax_after_discount": 0,
    "shipping": 0,
    "prepaid": 0
  }
  @Output() subTotal = new EventEmitter<number>();
  @Output() amountPaid = new EventEmitter<number>();

  TotalAmount: number = 0;

  ngOnChanges() {
    this.totalAmount();
  }

  totalAmount() : void {
    let val = this.Items.items.reduce(
      function (total :number, item :any) {
        return total + (item.rate * item.quantity);
      },
      0
    );

    this.TotalAmount = val;
  };

  calDiscount() : string {
    const Discount = (this.TotalAmount * this.OtherCharges.discount).toFixed(2);

    return Discount;
  };

  calTaxAfterDiscout() :string {
    const TaxAfterDiscount = ((this.TotalAmount - parseFloat(this.calDiscount())) * this.OtherCharges.tax_after_discount).toFixed(2);

    return TaxAfterDiscount;
  };
  formatShipping() : string {
    let val = parseFloat(this.OtherCharges.shipping).toFixed(2);

    return val;
  };

  formatAmountPaid() :string {
    let val = parseFloat(this.OtherCharges.prepaid);

    this.amountPaid.emit(val);

    return val.toFixed(2);
  };

  calTotal() : string {
    let val = (
      (this.TotalAmount - parseFloat(this.calDiscount())) +
      (parseFloat(this.calTaxAfterDiscout()) + parseFloat(this.formatShipping()) )
    );

    this.subTotal.emit(val);

    return val.toFixed(2);
  };

}
