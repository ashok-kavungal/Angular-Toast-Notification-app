import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Toast, toastTypes } from '../../shared/toast/toast.model';
import * as ToastActions from '../../shared/toast/store/toast.actions';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-toast-maker',
  templateUrl: './toast-maker.component.html',
  styleUrls: ['./toast-maker.component.css']
})
export class ToastMakerComponent implements OnInit {

 public toastForm! : FormGroup
 constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.toastForm = new FormGroup({
      'heading' :new FormControl(null,[Validators.required]),
      'subheading' :new FormControl(null),
      'message' :new FormControl(null,[Validators.required]),
    })
  }

  onSubmit(toastType : toastTypes): void{
    const heading = this.toastForm.value.heading;
    const subheading = this.toastForm.value.subheading;
    const message = this.toastForm.value.message;
 
    const newToast = new Toast(
                heading,
                subheading,
                message,
                toastType,
                new Date().getTime()
              );
    console.log(newToast)
    this.store.dispatch(new ToastActions.AddtoastStart(newToast)); 
    this.toastForm.reset()         
  }

}
