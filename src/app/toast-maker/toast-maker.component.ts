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
      'message' :new FormControl(null),
    })
  }

  onSubmit(toastType : toastTypes): void{
    const heading = this.toastForm.value.heading;
    const message = this.toastForm.value.message;
  
    const newToast = new Toast(
                heading,
                message,
                toastType,
                new Date().getTime()
              );
    console.log(newToast)
    this.store.dispatch(new ToastActions.AddToast(newToast));          
  }

}
