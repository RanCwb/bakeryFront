import { ProductsInterface } from './../../interfaces/products-interface';
import { Component } from '@angular/core';
import { BakaryServiceService } from 'src/app/services/bakary-service.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent  {

products: ProductsInterface[] = [];
data: any;


showAlert() {
  Swal.fire({
    title: 'Success!',
    text: 'Product edited successfully',
    icon: 'success',
   preConfirm: () => {
     window.location.reload();
   }
  });
}

deletedAlert() {
  Swal.fire({
    title: 'ATTENTION!',
    text: 'ARE YOU SURE YOU WANT TO DELETE THIS PRODUCT?',
    icon: 'error',
   preConfirm: () => {
     window.location.reload();
   }
  });
}
  constructor(private bakaryService: BakaryServiceService, public dialog: MatDialog) {


    this.handleGetItems();

   }


  openDialog(product: any): void {
   const dialogRef = this.dialog.open(ModalComponent, {
     width: '40%',
     data: product
   });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');

     });
  }


  handleGetItems(): void{
    this.bakaryService.getAll().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }

  handleDelete(id: any): void{
    this.bakaryService.deleteBakery(id).subscribe(data => {
      window.location.reload();
      this.handleGetItems();
    })


  }



}




