import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { toastTypes } from '../../shared/toast/toast.model';

@Component({
  selector: 'app-toast-maker',
  templateUrl: './toast-maker.component.html',
  styleUrls: ['./toast-maker.component.css']
})
export class ToastMakerComponent implements OnInit {

 public toastForm! : FormGroup
 constructor() { }

  ngOnInit(): void {
    this.toastForm = new FormGroup({
      'heading' :new FormControl(null,[Validators.required]),
      'message' :new FormControl(null),
    })
  }

  onSubmit(type : toastTypes): void{
    let heading = this.toastForm.value.heading;
    let message = this.toastForm.value.message;
    let toastType = type;
  }

}
