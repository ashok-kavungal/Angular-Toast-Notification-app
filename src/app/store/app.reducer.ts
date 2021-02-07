import { ActionReducerMap } from '@ngrx/store';

import * as toastReducer from '../../shared/toast/store/toast.reducer';
import * as toastActions from '../../shared/toast/store/toast.actions';

export interface AppState {
    toast: toastReducer.State;  
};

type AppActions = toastActions.ToastActions;

export const appReducer: ActionReducerMap<AppState,AppActions> = {
    toast:toastReducer.toastReducer,
 
};
