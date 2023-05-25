import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRegisteringPageComponent } from './product-registering-page.component';

xdescribe('ProductRegisteringPageComponent', () => {
  let component: ProductRegisteringPageComponent;
  let fixture: ComponentFixture<ProductRegisteringPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductRegisteringPageComponent],
    });
    fixture = TestBed.createComponent(ProductRegisteringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
