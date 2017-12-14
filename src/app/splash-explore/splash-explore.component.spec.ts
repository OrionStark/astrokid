import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashExploreComponent } from './splash-explore.component';

describe('SplashExploreComponent', () => {
  let component: SplashExploreComponent;
  let fixture: ComponentFixture<SplashExploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashExploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
