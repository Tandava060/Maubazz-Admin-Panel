import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ShopApiService } from 'src/app/services/shop-api.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-new-shop',
  templateUrl: './new-shop.component.html',
  styleUrls: ['./new-shop.component.scss']
})
export class NewShopComponent implements OnInit {

  color = [];


  newShopForm = this.fb.group({
    name: [ '', [Validators.required]],
    owner: [ '', [Validators.required]],
    user: ['', [Validators.required]],
    telNo: ['', [Validators.required]],
    email: ['', [Validators.required]],
    type: [[],  [ Validators.required]]
  });






  constructor(private fb: FormBuilder, private api: ShopApiService, private spinner: SpinnerService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.spinner.showSpinner()
  let data = {
    
    shop:{
			shopname: this.newShopForm.get('name').value,
			username: this.newShopForm.get('user').value,
			ownername: this.newShopForm.get('owner').value,
			contact: {
				tel: this.newShopForm.get('telNo').value,
				email : this.newShopForm.get('email').value,
			},
			type: this.newShopForm.get('type').value,
		}
  };
console.log(data)

this.spinner.showSpinner();
  this.api.addShop(data).subscribe({ 
    next: (res)=> {
      console.log(res)
  },
  error: (err) => {
    console.log(err);
    this.spinner.hideSpinner();
    this.toastr.error(err.error.error , 'Error');
  },
  complete: () => {
    this.spinner.hideSpinner();
    this.toastr.success('Successfully added shop', 'Success');
  }
})

// search: {}
// search: {
//      id: 1
// }
// search: {
//      brand_name: "Adiddas"
// }

  }

}
