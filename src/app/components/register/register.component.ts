import { RegisterServiceService } from './../../services/register-service.service';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

constructor(private RegisterService: RegisterServiceService) { }
showAlert() {
  Swal.fire({
    title: 'Success!',
    text: 'Product registered successfully',
    icon: 'success',
  });
}

erroALert() {
  Swal.fire({
    title: 'Not possible to register!',
    text: ' the product not registered, please try again',
    icon: 'error',
    preConfirm: () => {
      window.location.reload();
    }
  });
}

createProduct(event: Event) {
  event.preventDefault();

  const flavor = (event.target as any).flavor.value;
  const name = (event.target as any).name.value;
  const price = (event.target as any).price.value;

  if (flavor === '' || name === '' || price === null) {
    this.erroALert();
    return;
    }

  const newProduct = {
    flavor,
    name,
    price: parseFloat(price),
  };

  this.RegisterService.createNew(newProduct).subscribe((response) => {

    this.showAlert();
    (event.target as any).reset();
  }, () => {
    this.erroALert();
  });


}

}
