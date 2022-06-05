import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


var shop = {
  name: "Addidas",
  brandName: "Addidas",
  tradeName: "Addidas ltd spk",
  color: "#277777",
  logo: "",
  //https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80
  userName: "rob",
  ownerName: "robert de capri",
  phoneNo: "+230-57043253",
  email: "appadooashwin@gmail.com"
}

@Component({
  selector: 'app-shop-setting',
  templateUrl: './shop-setting.component.html',
  styleUrls: ['./shop-setting.component.scss']
})



export class ShopSettingComponent implements OnInit {
  public showBtn = false;
  public showOwnerBtn = false;
  constructor(private fb: FormBuilder) { }
  preview: String;
  currentLogo: String;
 

  ngOnInit(): void {
    this.currentLogo = this.shopForm.get('image').value;
  }

  shopForm = this.fb.group({
    name: {value: shop.name || '', disabled: true},
    brand: {value: shop.brandName || '', disabled: true},
    trade: {value: shop.tradeName || '', disabled: true},
    color: {value: shop.color || '', disabled: true},
    image: {value: shop.logo || '', disabled: true},
  });

  OwnerForm = this.fb.group({
    username: [ {value: shop.userName|| '', disabled: true},[]],
    ownername: [ {value: shop.ownerName|| '', disabled: true},[]],
    phone: [ {value: shop.phoneNo|| '', disabled: true},[]],
    email: [ {value: shop.email|| '', disabled: true},[]],
  });

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.shopForm.patchValue({
      image: file
    });
    this.shopForm.get('image').updateValueAndValidity()
    
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  enableShopUpdate() {
    for (var control in this.shopForm.controls) {
      this.shopForm.controls[control].enable();
  }
  this.showBtn = true;
  }

  disableShopUpdate() {
    for (var control in this.shopForm.controls) {
      this.shopForm.controls[control].disable();
  }
  this.showBtn = false;
}

enableOwnerUpdate():void {
  for (var control in this.OwnerForm.controls) {
    this.OwnerForm.controls[control].enable();
}

this.showOwnerBtn = true;
}

disableOwnerUpdate() {
  for (var control in this.OwnerForm.controls) {
    this.OwnerForm.controls[control].disable();
}
this.showOwnerBtn = false;
}


deletePreviewLogo() {

    this.preview = null;

  this.shopForm.patchValue({
    image: this.currentLogo
  });
  this.shopForm.get('image').updateValueAndValidity()
}


  submitShopForm() {
      console.log(this.shopForm.value)
  }

  submitOwnerForm() {
    console.log(this.OwnerForm.value)
}

}
