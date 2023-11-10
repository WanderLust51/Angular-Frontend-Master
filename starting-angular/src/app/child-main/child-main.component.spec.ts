import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildMainComponent } from './child-main.component';

describe('ChildMainComponent', () => {
  let component: ChildMainComponent;
  let fixture: ComponentFixture<ChildMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildMainComponent]
    });
    fixture = TestBed.createComponent(ChildMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
