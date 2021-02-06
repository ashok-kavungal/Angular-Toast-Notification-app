import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastListComponent } from './toast-list/toast-list.component';
import { ToastComponent } from './toast-list/toast/toast.component';



@NgModule({
  declarations: [ToastListComponent, ToastComponent],
  imports: [
    CommonModule
  ],exports:[ToastListComponent,ToastListComponent]
})
export class ToastModule { }
