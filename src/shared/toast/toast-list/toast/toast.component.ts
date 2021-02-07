import { Component, Input, OnInit } from '@angular/core';
import { Toast } from '../../toast.model';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  @Input()toast!: Toast;
  constructor() { }

  ngOnInit(): void {
  }

}
