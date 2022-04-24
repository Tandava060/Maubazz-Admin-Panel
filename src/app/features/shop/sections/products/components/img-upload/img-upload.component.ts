import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.scss']
})
export class ImgUploadComponent implements OnInit {
  addImageForm = null;
  preview: String;
  @Input() colors: String[];
 
  constructor(private fb: FormBuilder, private api:ProductApiService) { }

 


  ngOnInit(): void {
    
   

    this.addImageForm = this.fb.group({
      url: '',
      color: ''
    })

   
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addImageForm.patchValue({
      url: file
    });
    this.addImageForm.get('url').updateValueAndValidity()
    
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(file)
  }


  addImage() {
    console.log(this.addImageForm.value)
    this.api.addImage(this.addImageForm.value).subscribe({
      next: (res)=> {console.log(res)},
      error: (err) => {console.log(err)},
      complete: () => {console.log("complete")}
    })
  }
}
