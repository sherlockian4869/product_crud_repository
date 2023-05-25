import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyPurchasingPageComponent } from './dummy-purchasing-page.component';

xdescribe('DummyPurchasingPageComponent', () => {
  let component: DummyPurchasingPageComponent;
  let fixture: ComponentFixture<DummyPurchasingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummyPurchasingPageComponent],
    });
    fixture = TestBed.createComponent(DummyPurchasingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
