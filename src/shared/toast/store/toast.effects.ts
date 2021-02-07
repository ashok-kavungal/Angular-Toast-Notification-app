import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { map, withLatestFrom} from "rxjs/operators";

import * as ToastActions from '../store/toast.actions';
import * as fromApp from '../../../app/store/app.reducer'
import { Toast } from "../toast.model";



const handleRemoval = (toast : Toast)=>{
    console.log('handle removal is called')
    setTimeout(() => {
        console.log('executing removal')
        return new ToastActions.RemovetoastSuccess(toast.createdAt);      
    }, 5000);
}

@Injectable()
export class ToastEffects{
    @Effect()
    toastAdd = this.actions$.pipe(
        ofType(ToastActions.ADD_TOAST_START),
        map((data : ToastActions.AddtoastStart)=>{
            const toast = data.payload;
            handleRemoval(toast);
            return new ToastActions.AddtoastSuccess(toast)
        }),
    )

    constructor(
        private actions$: Actions,
        private store :Store<fromApp.AppState>
    ){}

}