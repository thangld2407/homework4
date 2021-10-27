import { Component, EventEmitter, Input, Output } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component ({
  selector: 'items-invoice',
  templateUrl: './items.component.html',
  // styleUrls: './header.component.scss'
  styleUrls:["./items.component.scss"]
})

export class itemsComponent {
  constructor (private http: HttpClient){}

  @Input() Items:any = {
    "notes":"",
    "items":[]
  }


}
