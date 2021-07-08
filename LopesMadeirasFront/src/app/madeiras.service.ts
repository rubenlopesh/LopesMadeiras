import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { madeirasclass } from './madeirasclass';



@Injectable({
  providedIn: 'root'
})


export class madeirasService {

  constructor(private http: HttpClient) { }

  url : string = "http://localhost:3000/madeiras";

  getMadeiras() {
    return this.http.get<madeirasclass[]>(this.url);

  }




  options!: {
    headers?: HttpHeaders | { [header: string]: string | string[]; };
    observe?: 'body' | 'events' | 'response';
    params?: HttpParams | { [param: string]: string | string[]; };
    reportProgress?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
  };


}

