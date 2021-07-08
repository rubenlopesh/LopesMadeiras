import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   // MatPaginator Inputs
   length = 100;
   pageSize = 10;
   pageSizeOptions: number[] = [5, 10, 25, 100];

   // MatPaginator Output
  pageEvent: PageEvent = new PageEvent; //pageEvent: PageEvent;

   setPageSizeOptions(setPageSizeOptionsInput: string) {
     if (setPageSizeOptionsInput) {
       this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
     }
   }

}
