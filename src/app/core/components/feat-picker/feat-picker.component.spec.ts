import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatPickerComponent } from './feat-picker.component';

describe('FeatPickerComponent', () => {
  let component: FeatPickerComponent;
  let fixture: ComponentFixture<FeatPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
