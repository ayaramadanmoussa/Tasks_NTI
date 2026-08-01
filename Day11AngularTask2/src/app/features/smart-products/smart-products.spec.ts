import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartProducts } from './smart-products';

describe('SmartProducts', () => {
  let component: SmartProducts;
  let fixture: ComponentFixture<SmartProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartProducts],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
