import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Toast } from './toast.model';
import * as fromApp from '../../app/store/app.reducer';
import * as ToastAction from '../toast/store/toast.actions';

@Injectable({
  providedIn: 'root'
})
export class ToastRemoveService {

  timeout!: number;

  constructor(private store: Store<fromApp.AppState>) { }

  setTimoutValue(value:number){
    this.timeout = value * 1000;
  }

  startTimer(toast:Toast){
    setTimeout(()=>{
       this.toastTimeout(toast);
    },this.timeout)
  }

  toastTimeout(toast:Toast){
    this.store.dispatch(new ToastAction.RemovetoastSuccess(toast));
  }
}
