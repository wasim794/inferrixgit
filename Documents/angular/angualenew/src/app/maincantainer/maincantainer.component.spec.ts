import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincantainerComponent } from './maincantainer.component';

describe('MaincantainerComponent', () => {
  let component: MaincantainerComponent;
  let fixture: ComponentFixture<MaincantainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincantainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincantainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
