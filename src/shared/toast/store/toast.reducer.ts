import { Toast } from "../toast.model"
import * as ToastActions from "./toast.actions"


export interface State{
    toastList : Toast[];
};

const initialState : State ={
    toastList : [],
}

export function toastReducer(
    state : State = initialState,
    action : ToastActions.ToastActions
): State{
    switch(action.type){
        case ToastActions.ADD_TOAST:
            return {
                ...state,
                toastList : [...state.toastList,action.payload]
            };
        case ToastActions.REMOVE_TOAST:
            return {
                ...state,
                toastList : state.toastList.filter((toasts)=>{
                    return toasts.createdAt !== action.payload;
                })
            }    
        default:
            return state;
    }
}

