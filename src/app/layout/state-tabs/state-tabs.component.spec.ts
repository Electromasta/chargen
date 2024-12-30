import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTabsComponent } from './state-tabs.component';

describe('StateTabsComponent', () => {
  let component: StateTabsComponent;
  let fixture: ComponentFixture<StateTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StateTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
