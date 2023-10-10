import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ModalServiceService  {

  public isModalOpen: boolean = false;
  private updateUrl = "http://localhost:8080/bakery/update"


  constructor(private http: HttpClient) { }

  updateProduct(id: string, name: string, flavor: string, price: number) {
    const data = { id, name, flavor, price };
    return this.http.put(this.updateUrl, data);
  }

}
