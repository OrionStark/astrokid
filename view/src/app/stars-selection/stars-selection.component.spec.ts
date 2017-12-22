import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsSelectionComponent } from './stars-selection.component';

describe('StarsSelectionComponent', () => {
  let component: StarsSelectionComponent;
  let fixture: ComponentFixture<StarsSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
