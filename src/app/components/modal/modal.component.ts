import { ModalServiceService } from './../../services/modal-service.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  id: string = '';
  name: string = '';
  flavor: string = '';
  price: number = 0;


  constructor(public dialogRef: MatDialogRef<ModalComponent>,  private ModalServiceService: ModalServiceService) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  showAlert() {
    Swal.fire({
      title: 'Success!',
      text: 'Product deleted successfully',
      icon: 'success',
     preConfirm: () => {
       window.location.reload();
     }
    });
  }

  updateAlert() {
    Swal.fire({
      title: 'Success!',
      text: 'Product updated successfully',
      icon: 'info',
     preConfirm: () => {
       window.location.reload();
     }
    });
  }
  handleEditProduct() {
    const id = this.id
    const name = this.name
    const flavor = this.flavor
    const price = this.price

    if (!id || !name || !flavor || !price) {

      Swal.fire({
        title: 'Error!',
        text: 'Please fill all the fields',
        icon: 'error',
        preConfirm: () => {
          window.location.reload();
        }
      })

      return;

    }

    this.ModalServiceService.updateProduct(id, name, flavor, price).subscribe(
      (response) => {
        this.updateAlert();
        console.log('Produto atualizado com sucesso!', response);
      },
      (error) => {
        console.error('Erro ao atualizar o produto:', error);
      }
    );
  }




}
