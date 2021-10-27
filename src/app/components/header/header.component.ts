import { Component, Input } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component ({
  selector: 'header-invoice',
  templateUrl: './header.component.html',
  // styleUrls: './header.component.scss'
  styleUrls:["./header.component.scss"]
})

export class headerComponent {
  constructor (private http: HttpClient){}

  @Input() Customer:any = {
    "id": "",
    "logo": "",
    "from": "",
    "bill_to": "",
    "address": "",
    "date":""
  }

  @Input() totalBalance: number = 0;

}
