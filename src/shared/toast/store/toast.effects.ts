import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, delay, map, mergeMap, switchMap, withLatestFrom} from "rxjs/operators";

import * as ToastActions from '../store/toast.actions';
import * as fromApp from '../../../app/store/app.reducer'
import { Toast } from "../toast.model";
import { of } from "rxjs";
import { ToastRemoveService } from "../toast-remove.service";

  const handleTimer = async (toast: Toast,timeout:number)=>{
   await setTimeout(() => {
       console.log('the function inside timer is called')
       return true;
   }, timeout*1000);
   return toast;
  }

 @Injectable()
export class ToastEffects{

   @Effect()
   toastAdd = this.actions$.pipe(
       ofType( ToastActions.ADD_TOAST_START),
       map((action : ToastActions.AddtoastStart)=> action.payload),
       map((toast:Toast)=>{
           this.toastService.startTimer(toast);
           return new ToastActions.AddtoastSuccess(toast);
       }) 
    );
    constructor(
        private actions$: Actions,
        private  toastService:ToastRemoveService
    ){}

}