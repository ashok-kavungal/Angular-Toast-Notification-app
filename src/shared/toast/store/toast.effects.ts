import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, map} from "rxjs/operators";

import * as ToastActions from '../store/toast.actions';
import * as fromApp from '../../../app/store/app.reducer'



 @Injectable()
export class ToastEffects{

   @Effect()
   toastAdd = this.actions$.pipe(
       ofType( ToastActions.ADD_TOAST_START),
       map((action : ToastActions.AddtoastStart)=> action.payload),
       concatMap( toast => [
        new ToastActions.AddtoastSuccess(toast),
        new ToastActions.RemovetoastStart(toast.createdAt)
  ])
); 

    constructor(
        private actions$: Actions,
        private store :Store<fromApp.AppState>
    ){}

}