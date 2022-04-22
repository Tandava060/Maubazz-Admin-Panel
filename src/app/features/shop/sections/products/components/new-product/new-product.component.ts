import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER, } from '@angular/cdk/keycodes';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  color = [];


  newProductForm = this.fb.group({
    name: [ '', [Validators.required]],
    price: [ '', [Validators.required]],
    discount: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
    description: ['', [Validators.required]],
    color: [[],  [ Validators.required]],
    size: [[], [Validators.required]],
    category:[[], [Validators.required]],
    images: this.fb.array([])
  });

  addImageForm = this.fb.group({
    url: [ null, [Validators.required]],
    color: [ '', [Validators.required]]
  })

  preview: String;
 colors: String[];

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addImage()
  }

  submitForm() {
    console.log(this.newProductForm.value)
  }

  addColor(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.newProductForm.controls['color'].value.push(value);
      this.newProductForm.controls['color'].updateValueAndValidity()
    }
    event.chipInput!.clear();
  }

  removeColor(color: String): void {
    const index = this.newProductForm.controls['color'].value.indexOf(color);

    if (index >= 0) {
      this.newProductForm.controls['color'].value.splice(index, 1);
      this.newProductForm.controls['color'].updateValueAndValidity();
    }
  }

  addSize(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.newProductForm.controls['size'].value.push(value);
    }
    event.chipInput!.clear();
  }

  removeSize(size: String): void {
    const index = this.newProductForm.controls['size'].value.indexOf(size);

    if (index >= 0) {
      this.newProductForm.controls['size'].value.splice(index, 1);
    }
  }

  addCategory(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.newProductForm.controls['category'].value.push(value);
    }
    event.chipInput!.clear();
  }

  removeCategory(category: String): void {
    const index = this.newProductForm.controls['category'].value.indexOf(category);

    if (index >= 0) {
      this.newProductForm.controls['category'].value.splice(index, 1);
    }
  }

  addImage() {
    
  
    this.images.push(this.addImageForm);
  }

  get images() {
    return this.newProductForm.controls["images"] as FormArray;
  }

  uploadFile(event) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.addImageForm.patchValue({
  //     url: file
  //   });
  //   this.addImageForm.get('url').updateValueAndValidity()
    
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.preview = reader.result as string;
  //   }
  //   reader.readAsDataURL(file)
  }





}
