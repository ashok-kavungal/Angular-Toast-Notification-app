import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastMakerComponent } from './toast-maker.component';

describe('ToastMakerComponent', () => {
  let component:ToastMakerComponent;
  let fixture: ComponentFixture<ToastMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
