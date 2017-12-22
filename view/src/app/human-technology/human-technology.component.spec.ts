import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanTechnologyComponent } from './human-technology.component';

describe('HumanTechnologyComponent', () => {
  let component: HumanTechnologyComponent;
  let fixture: ComponentFixture<HumanTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
