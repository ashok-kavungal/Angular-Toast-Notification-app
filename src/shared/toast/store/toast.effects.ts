import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, map, switchMap, withLatestFrom} from "rxjs/operators";

import * as ToastActions from '../store/toast.actions';
import * as fromApp from '../../../app/store/app.reducer'
import { Toast } from "../toast.model";

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
       concatMap( toast => [
        new ToastActions.AddtoastSuccess(toast),
        new ToastActions.RemovetoastStart(toast)
    ])
    );
    
    @Effect()
    toastRemove = this.actions$.pipe(
        ofType( ToastActions.REMOVE_TOAST_START),
        map((action : ToastActions.AddtoastStart)=> action.payload),
        withLatestFrom(this.store),
        switchMap(([toast,currState])=>{
              return handleTimer(toast,currState.toast.timeout)
        }),
         map(toast => {
             console.log(toast)
            console.log('the toast is going to be removed :'+ toast)
            return new ToastActions.RemovetoastSuccess(toast);
        })
     ); 

    constructor(
        private actions$: Actions,
        private store :Store<fromApp.AppState>
    ){}

}