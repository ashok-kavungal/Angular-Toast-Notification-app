import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';


import { Toast, toastPositon } from '../toast.model';
import * as fromApp from '../../../app/store/app.reducer';
import * as ToastActions from '../store/toast.actions';

@Component({
  selector: 'app-toast-list',
  templateUrl: './toast-list.component.html',
  styleUrls: ['./toast-list.component.css']
})
export class ToastListComponent implements OnInit,OnDestroy {
  
  toastList!:Toast[];
  @Input() timeout: number = 5;
  @Input() position: toastPositon = 'top-right';
  private toastListSub !: Subscription;

  constructor( private store: Store<fromApp.AppState>) { }

  ngOnInit(): void{
    this.toastListSub = this.store
    .select('toast')
    .pipe(map(toastState => toastState.toastList))
    .subscribe(
      (toastList : Toast[])=>{
        this.toastList = toastList;
        console.log('toastlist changed and length is :' +this.toastList.length)
        console.log(this.toastList)
        console.log(this.position)

      }
    )
    this.store.dispatch(new ToastActions.SettoastTimeout(this.timeout));
  }

  ngOnDestroy():void{
    this.toastListSub.unsubscribe();
  }
}

