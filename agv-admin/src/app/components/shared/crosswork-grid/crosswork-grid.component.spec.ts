import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossworkGridComponent } from './crosswork-grid.component';

describe('CrossworkGridComponent', () => {
  let component: CrossworkGridComponent;
  let fixture: ComponentFixture<CrossworkGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossworkGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossworkGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
