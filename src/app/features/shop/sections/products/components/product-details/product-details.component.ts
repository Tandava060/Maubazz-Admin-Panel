import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER, } from '@angular/cdk/keycodes';
import { Product } from 'src/app/models/product';

export interface color {
  name: string;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;
  @Input() expandToggle: any;

  updateProductForm = null;
  public showBtn = false;


  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(private fb: FormBuilder) { }

 


  ngOnInit(): void {
    
   this.updateProductForm = this.fb.group({
      name: [{value: this.product.name || '', disabled: true}, [Validators.required]],
      price: [{value: this.product.price || '', disabled: true}, [Validators.required]],
      discount: [{value: this.product.discount || '', disabled: true}, [Validators.required]],
      quantity: [{value: this.product.quantity || '', disabled: true}, [Validators.required]],
      description: [{value: this.product.description || '', disabled: true}, [Validators.required]],
      color: [{value: this.product.colors || '', disabled: true}, [Validators.required]],
      size: [{value: this.product.size || '', disabled: true}, [Validators.required]],
      category:[{value: this.product.category || '', disabled: true}, [Validators.required]],
    })

   
  }




  enableUpdate():void {
    for (var control in this.updateProductForm.controls) {
      this.updateProductForm.controls[control].enable();
  }

  this.showBtn = true;
  }

  disableUpdate() {
    for (var control in this.updateProductForm.controls) {
      this.updateProductForm.controls[control].disable();
  }

  this.showBtn = false;
 this.expandToggle.callExpandToggle()
  }


  addColor(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.updateProductForm.controls['color'].value.push(value);
    }
    event.chipInput!.clear();
  }

  removeColor(color: String): void {
    const index = this.updateProductForm.controls['color'].value.indexOf(color);

    if (index >= 0) {
      this.updateProductForm.controls['color'].value.splice(index, 1);
    }
  }

  addSize(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.updateProductForm.controls['size'].value.push(value);
    }
    event.chipInput!.clear();
  }

  removeSize(size: String): void {
    const index = this.updateProductForm.controls['size'].value.indexOf(size);

    if (index >= 0) {
      this.updateProductForm.controls['size'].value.splice(index, 1);
    }
  }

  addCategory(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.updateProductForm.controls['category'].value.push(value);
    }
    event.chipInput!.clear();
  }

  removeCategory(category: String): void {
    const index = this.updateProductForm.controls['category'].value.indexOf(category);

    if (index >= 0) {
      this.updateProductForm.controls['category'].value.splice(index, 1);
    }
  }

  submitForm() {
    console.log(this.updateProductForm.value)
  }

}
