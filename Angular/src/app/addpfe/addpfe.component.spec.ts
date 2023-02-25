import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpfeComponent } from './addpfe.component';

describe('AddpfeComponent', () => {
  let component: AddpfeComponent;
  let fixture: ComponentFixture<AddpfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
