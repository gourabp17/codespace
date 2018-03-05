import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Su4dzQgr1yComponent } from './su4dz-qgr1y.component';

describe('Su4dzQgr1yComponent', () => {
  let component: Su4dzQgr1yComponent;
  let fixture: ComponentFixture<Su4dzQgr1yComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Su4dzQgr1yComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Su4dzQgr1yComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
