import { Action } from "@ngrx/store";
import { Toast } from "../toast.model";


export const ADD_TOAST_START = '[Toast] Add Toast Start';
export const ADD_TOAST_SUCCESS = '[Toast] Add Toast Success';
export const REMOVE_TOAST_START = '[Toast] Remove Toast Start';
export const REMOVE_TOAST_SUCCESS = '[Toast] Remove Toast Success';
export const SET_TOAST_TIMEOUT = '[Toast] Set Toast Timeout';

export class AddtoastStart implements Action {
    readonly type = ADD_TOAST_START;
    constructor(public payload: Toast){}
}

export class SettoastTimeout implements Action {
    readonly type = SET_TOAST_TIMEOUT;
    constructor(public payload: number){}
}

export class AddtoastSuccess implements Action {
    readonly type = ADD_TOAST_SUCCESS;
    constructor(public payload: Toast){}
}

export class RemovetoastStart implements Action{
    readonly type = REMOVE_TOAST_START;
    constructor(public payload: number){}
}

export class RemovetoastSuccess implements Action{
    readonly type = REMOVE_TOAST_SUCCESS;
    constructor(public payload: number){}
}

export type ToastActions =
                AddtoastStart
                |AddtoastSuccess
                |RemovetoastStart
                |RemovetoastSuccess
                |SettoastTimeout