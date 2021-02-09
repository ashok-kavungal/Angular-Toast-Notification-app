import { Toast } from "../toast.model"
import * as ToastActions from "./toast.actions"


export interface State{
    toastList : Toast[];
    timeout: number;
};

const initialState : State ={
    toastList : [],
    timeout: 5
}

export function toastReducer(
    state : State = initialState,
    action : ToastActions.ToastActions
): State{
    switch(action.type){
        case ToastActions.ADD_TOAST_SUCCESS:
            return {
                ...state,
                toastList : [...state.toastList,action.payload]
            };
        case ToastActions.SET_TOAST_TIMEOUT:
            return {
                    ...state,
                    timeout : action.payload
             };    
        case ToastActions.REMOVE_TOAST_SUCCESS:
            return {
                ...state,
                toastList : state.toastList.filter((toasts)=>{
                    return toasts.createdAt !== action.payload.createdAt;
                })
            }    
        default:
            return state;
    }
}

