import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurproductsComponent } from './ourproducts';

describe('Ourproducts', () => {
  let component: OurproductsComponent;
  let fixture: ComponentFixture<OurproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
