import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.scss']
})
export class ImgUploadComponent implements OnInit {
  addImageForm = null;
  preview: String;
  @Input() colors: String[];
 
  constructor(private fb: FormBuilder) { }

 


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
  }
}
