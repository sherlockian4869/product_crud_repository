import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessagingComponent } from './error-messaging.component';

xdescribe('ErrorMessagingComponent', () => {
  let component: ErrorMessagingComponent;
  let fixture: ComponentFixture<ErrorMessagingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMessagingComponent],
    });
    fixture = TestBed.createComponent(ErrorMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
