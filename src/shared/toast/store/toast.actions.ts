import { Action } from "@ngrx/store";
import { Toast } from "../toast.model";


export const ADD_TOAST = '[Toast] Add Toast';
export const REMOVE_TOAST = '[Toast] Remove Toast';

export class AddToast implements Action {
    readonly type = ADD_TOAST;
    constructor(public payload: Toast){}
}

export class RemoveToast implements Action{
    readonly type = REMOVE_TOAST;
    constructor(public payload: number){}
}

export type ToastActions = AddToast | RemoveToast;