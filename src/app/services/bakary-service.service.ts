import { HttpClient,HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BakaryServiceService {

  private url = "http://localhost:8080/bakery/all"

  private urlDelete = "http://localhost:8080/bakery"
  private urlUpdate = "http://localhost:8080/bakery/update"
  public isModalOpen: boolean = false;


  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  setNewProduct(product: any): Observable<HttpEvent<any>> {
    return this.http.post<any>(this.url, product);
  }

  deleteBakery(id: any): Observable<HttpEvent<any>> {
    return this.http.delete<any>(this.urlDelete + "/" + id);
  }

  updateBakery(product: any): Observable<HttpEvent<any>> {
    return this.http.put<any>(this.urlUpdate, product);
  }




}
