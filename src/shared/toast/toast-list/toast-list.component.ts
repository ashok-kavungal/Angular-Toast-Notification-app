import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { Toast, toastPositon } from '../toast.model';
import * as fromApp from '../../../app/store/app.reducer';
import { ToastRemoveService } from '../toast-remove.service';


@Component({
  selector: 'app-toast-list',
  templateUrl: './toast-list.component.html',
  styleUrls: ['./toast-list.component.css']
})
export class ToastListComponent implements OnInit,OnDestroy{
  
  toastList:Toast[] = [];
  toastOverflowList! : Toast[]
  @Input() timeout: number = 5;
  @Input() position: toastPositon = 'top-right';

  toastOverflow: boolean = false;

  private toastListSub !: Subscription;

  constructor( private store: Store<fromApp.AppState>,
               private timoutService: ToastRemoveService ) { }

  ngOnInit(): void{
    this.toastListSub = this.store
    .select('toast')
    .pipe(map(toastState => toastState.toastList))
    .subscribe(
      (toastList : Toast[])=>{
        this.toastList = toastList;
        this.toastOverflow = this.toastList.length > 4;
        if(this.toastOverflow){ 
          this.toastOverflowList = toastList.slice(4);
        }else{
          this.toastOverflowList = [];
        }  
      }
    )
    this.timoutService.setTimoutValue(this.timeout);
  }

  ngOnDestroy():void{
    this.toastListSub.unsubscribe();
  }
}

