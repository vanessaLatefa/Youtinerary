import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public Editor = ClassicEditor;
  firstFormGroup:FormGroup;
  secondFormGroup:FormGroup;
  priorities:string[] = ['Budget-friendly', 'Family', 'Business']
  categories:object[] = [
    {
      id:1,
      name: 'Travel' 
    },
    {
      id:2,
      name: 'Food' 
    },
    

  ]

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit() {
    
    this.firstFormGroup = this.formBuilder.group({
      titleCtrl: ['', Validators.required],
      locationCtrl: ['', Validators.required],
      priorityCtrl: ['', Validators.required],
      categoryCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      messageCtrl: ['', Validators.required]
    });
  }

  

  getCategoryName(category:object) {
    return category ? category['name'] : undefined;
  }

}


