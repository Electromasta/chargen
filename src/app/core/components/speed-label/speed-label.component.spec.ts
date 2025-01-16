import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedLabelComponent } from './speed-label.component';

describe('SpeedLabelComponent', () => {
  let component: SpeedLabelComponent;
  let fixture: ComponentFixture<SpeedLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeedLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeedLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
