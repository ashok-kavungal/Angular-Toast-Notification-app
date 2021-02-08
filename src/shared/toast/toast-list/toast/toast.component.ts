import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Toast } from '../../toast.model';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit,OnChanges{

  @Input()toast!: Toast;
  @Input()toastIndex!: number;
  toastbufferFull: boolean = false;
  constructor() { }

  ngOnInit(): void {}
  ngOnChanges():void{
    this.toastbufferFull = this.toastIndex > 4;
  }


}
