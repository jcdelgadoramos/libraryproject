import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubfieldComponent } from './subfield.component';

describe('SubfieldComponent', () => {
  let component: SubfieldComponent;
  let fixture: ComponentFixture<SubfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});