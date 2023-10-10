import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  url = "http://localhost:8080/bakery/create"

  constructor(private http: HttpClient) { }

  createNew(product: any): Observable<HttpEvent<any>> {
    return this.http.post<any>(this.url, product);}

}
