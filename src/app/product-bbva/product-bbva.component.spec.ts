import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBbvaComponent } from './product-bbva.component';

describe('ProductBbvaComponent', () => {
  let component: ProductBbvaComponent;
  let fixture: ComponentFixture<ProductBbvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBbvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBbvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
